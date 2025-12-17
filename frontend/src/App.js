import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ComparisonSection from "./components/ComparisonSection";
import CivilMepSection from "./components/CivilMepSection";
import WorkflowSection from "./components/WorkflowSection";
import ServicesSection from "./components/ServicesSection";
import AssetsSection from "./components/AssetsSection";
import ProjectsSection from "./components/ProjectsSection";
import VisualIntegritySection from "./components/VisualIntegritySection";
import ContractualSection from "./components/ContractualSection";
import SafetySection from "./components/SafetySection";
import MaterialsSection from "./components/MaterialsSection";
import FutureReadySection from "./components/FutureReadySection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProfileDownloadSection from "./components/ProfileDownloadSection";
import EstimatorSection from "./components/EstimatorSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <HeroSection />
      <PartnersSection />
      <WhyChooseSection />
      <ComparisonSection />
      <CivilMepSection />
      <WorkflowSection />
      <ServicesSection />
      <AssetsSection />
      <ProjectsSection />
      <VisualIntegritySection />
      <ContractualSection />
      <SafetySection />
      <MaterialsSection />
      <FutureReadySection />
      <TeamSection />
      <TestimonialsSection />
      <ProfileDownloadSection />
      <EstimatorSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
