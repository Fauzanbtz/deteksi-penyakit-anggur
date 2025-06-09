// src/components/landing-page/Navbar.tsx

import Link from "next/link";
import { Grape } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Grape className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Daun Anggurku</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Fitur</Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">Cara Kerja</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Cara Pengambilan Gambar</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}