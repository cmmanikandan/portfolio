import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Navigation & Layout Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";
import { IntroLoader } from "./components/IntroLoader";
import { BackToTop } from "./components/BackToTop";
import { ScrollToTop } from "./components/ScrollToTop";

// Page Views
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { EducationPage } from "./pages/EducationPage";
import { ContactPage } from "./pages/ContactPage";

const AnimatedRoutes: React.FC<{ onOpenResumeModal: () => void }> = ({ onOpenResumeModal }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className="flex-1 flex flex-col bg-[#FCFAF5]"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenResumeModal={onOpenResumeModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#FCFAF5] text-[#19202B] flex flex-col font-sans selection:bg-[#F7E7CE] selection:text-[#192841]">
        {/* Short Branded Entrance Screen (650–800ms) */}
        <IntroLoader />

        {/* Global Solid Navbar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Dynamic Route Pages with Fast Smooth Transitions */}
        <main className="flex-1 flex flex-col bg-[#FCFAF5]">
          <AnimatedRoutes onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        </main>

        {/* Global Footer with Navy background reaching bottom */}
        <Footer />

        {/* Floating Back to Top Button */}
        <BackToTop />

        {/* Global Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
