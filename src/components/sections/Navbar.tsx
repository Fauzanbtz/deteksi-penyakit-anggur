// src/components/landing-page/Navbar.tsx

import Link from "next/link";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">VisionAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}