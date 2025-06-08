// src/components/landing-page/Footer.tsx

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Brain, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Brain className="h-8 w-8 text-blue-400" />
                            <span className="text-xl font-bold">VisionAI</span>
                        </div>
                        <p className="text-gray-400 mb-4">AI-powered image analysis platform for everyone.</p>
                        <div className="flex space-x-4">
                            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#features" className="hover:text-white">Features</Link></li>
                            <li><Link href="#analysis" className="hover:text-white">API</Link></li>
                            <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#about" className="hover:text-white">About</Link></li>
                            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <Separator className="my-8 bg-gray-800" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© 2025 VisionAI. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-sm">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}