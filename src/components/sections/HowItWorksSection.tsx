// src/components/landing-page/HowItWorksSection.tsx

import { Upload, Brain, BarChart3 } from "lucide-react";

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Simple steps to get AI-powered insights from your images
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Upload className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">1. Upload Image</h3>
                        <p className="text-gray-600">Simply drag and drop or click to upload your image file</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Brain className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
                        <p className="text-gray-600">Our advanced ML models process and analyze your image</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BarChart3 className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">3. Get Results</h3>
                        <p className="text-gray-600">Receive detailed insights, classifications, and object detection results</p>
                    </div>
                </div>
            </div>
        </section>
    );
}