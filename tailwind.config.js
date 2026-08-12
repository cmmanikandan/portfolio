/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#192841",
          hover: "#233758",
          light: "#2A4064",
          dark: "#101B2D"
        },
        champagne: {
          DEFAULT: "#F7E7CE",
          hover: "#F3DCB7",
          light: "#FAF0E2"
        },
        warmwhite: {
          DEFAULT: "#FCFAF5",
          card: "#FFFFFF",
          muted: "#F5F2EA"
        },
        charcoal: {
          DEFAULT: "#19202B",
          muted: "#2C3545"
        },
        slateText: {
          DEFAULT: "#5F6368",
          light: "#757B82"
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
