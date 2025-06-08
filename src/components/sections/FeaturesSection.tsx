// src/components/landing-page/FeaturesSection.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Shield, Award, Users } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our advanced machine learning models provide comprehensive image analysis capabilities
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Brain className="w-12 h-12 text-blue-600 mb-4" />
                            <CardTitle>Object Detection</CardTitle>
                            <CardDescription>Identify and locate multiple objects within images with precise bounding boxes</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                         <CardHeader>
                            <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
                            <CardTitle>Image Classification</CardTitle>
                            <CardDescription>Classify images into thousands of categories with confidence scores</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Zap className="w-12 h-12 text-yellow-600 mb-4" />
                            <CardTitle>Real-time Analysis</CardTitle>
                            <CardDescription>Get instant results with our optimized inference pipeline</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-red-600 mb-4" />
                            <CardTitle>Privacy First</CardTitle>
                            <CardDescription>Your images are processed securely and never stored permanently</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Award className="w-12 h-12 text-purple-600 mb-4" />
                            <CardTitle>High Accuracy</CardTitle>
                            <CardDescription>State-of-the-art models trained on millions of images for maximum precision</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Users className="w-12 h-12 text-indigo-600 mb-4" />
                            <CardTitle>API Access</CardTitle>
                            <CardDescription>Integrate our AI capabilities into your applications with our REST API</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}