// src/app/page.tsx

"use client"

import { useState } from "react"
import Navbar from "@/components/sections/Navbar";
import AnalysisSection from "@/components/sections/AnalysisSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

interface DetectionResult {
  label: string;
  confidence: number;
}

export default function HomePage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectionResults, setDetectionResults] = useState<DetectionResult[]>([]);
  const [apiError, setApiError] = useState<string>('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main>
        <AnalysisSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}