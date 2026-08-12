import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Please submit via POST."
    });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // 1. Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide your name."
      });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address."
      });
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address format."
      });
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a subject."
      });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a message."
      });
    }

    // Check string lengths to prevent payload abuse
    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 150);
    const cleanSubject = subject.trim().slice(0, 200);
    const cleanMessage = message.trim().slice(0, 5000);

    // 2. Initialize Resend securely via server environment variable
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY server environment variable in Vercel settings");
      return res.status(500).json({
        success: false,
        error: "Something went wrong while sending your message. Please try again."
      });
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "CM Manikandan <hello@cmmanikandan.in>";
    const toAddress = process.env.CONTACT_TO_EMAIL || "manikandanprabhu37@gmail.com";

    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium"
    });

    // 3. Send Email via Resend with verified domain cmmanikandan.in
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: cleanEmail,
      subject: `[cmmanikandan.in] ${cleanSubject}`,
      text: `New message from ${cleanName} (${cleanEmail})\n\nSubject: ${cleanSubject}\nWebsite: https://cmmanikandan.in\nDate: ${submissionTime} IST\n\nMessage:\n${cleanMessage}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FCFAF5; color: #192841; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e0d8; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(25, 40, 65, 0.06); }
            .header { background: #192841; color: #ffffff; padding: 24px 28px; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; }
            .header p { margin: 4px 0 0 0; font-size: 13px; color: #F7E7CE; }
            .content { padding: 28px; line-height: 1.6; }
            .field-group { margin-bottom: 16px; }
            .field-label { font-size: 12px; font-weight: bold; color: #6F7885; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #192841; font-weight: 600; }
            .message-box { background: #F5F1E8; border-left: 4px solid #192841; border-radius: 8px; padding: 16px 20px; margin-top: 18px; font-size: 15px; color: #192841; white-space: pre-wrap; word-break: break-word; }
            .footer { background: #FCFAF5; border-top: 1px solid #e5e0d8; padding: 16px 28px; font-size: 12px; color: #6F7885; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Message from Portfolio</h1>
              <p>Received via <a href="https://cmmanikandan.in" style="color: #F7E7CE; text-decoration: underline;">cmmanikandan.in</a></p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${cleanName}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${cleanEmail}" style="color: #192841;">${cleanEmail}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Subject</div>
                <div class="field-value">${cleanSubject}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Website Domain</div>
                <div class="field-value"><a href="https://cmmanikandan.in" style="color: #192841;">cmmanikandan.in</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Received At</div>
                <div class="field-value" style="font-size: 13px; font-weight: normal; color: #6F7885;">${submissionTime} (IST)</div>
              </div>
              <div class="field-group" style="margin-top: 20px;">
                <div class="field-label">Message Content</div>
                <div class="message-box">${cleanMessage}</div>
              </div>
            </div>
            <div class="footer">
              Hit "Reply" in your email client to directly reply to ${cleanName} (${cleanEmail}).
              <br />
              Delivered via <strong>hello@cmmanikandan.in</strong> for <a href="https://cmmanikandan.in" style="color: #192841;">cmmanikandan.in</a>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(500).json({
        success: false,
        error: "Something went wrong while sending your message. Please try again."
      });
    }

    // 4. Success Response
    return res.status(200).json({
      success: true,
      message: "Message sent successfully. I'll get back to you soon.",
      id: data?.id
    });

  } catch (err: any) {
    console.error("Server API Exception:", err);
    return res.status(500).json({
      success: false,
      error: "Something went wrong while sending your message. Please try again."
    });
  }
}
