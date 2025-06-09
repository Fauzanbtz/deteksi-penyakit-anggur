// src/components/landing-page/Footer.tsx

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Grape, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center space-x-2 mb-4">
                            <Grape className="h-8 w-8 text-blue-400" />
                            <span className="text-xl font-bold">Daun Anggurku</span>
                        </div>
                        <p className="text-gray-400 mb-4">Platform analisis gambar berbasis AI untuk semua orang.</p>
                        <div className="flex space-x-4">
                            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
                <Separator className="my-8 bg-gray-800" />
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <p className="text-gray-400 text-sm">© 2025 Daun Anggurku. Hak Cipta Dilindungi.</p>
                </div>
            </div>
        </footer>
    );
}