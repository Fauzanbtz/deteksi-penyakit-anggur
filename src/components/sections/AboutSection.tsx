// src/components/landing-page/AboutSection.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About VisionAI</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            We are a team of AI researchers and engineers passionate about making computer vision accessible to
                            everyone. Our platform combines cutting-edge machine learning models with an intuitive interface.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Founded in 2023, we've helped thousands of users analyze millions of images across various industries
                            including healthcare, retail, security, and research.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Button>Learn More</Button>
                            <Button variant="outline">Our Team</Button>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/placeholder.svg?height=400&width=500" // Ganti dengan path gambar yang relevan
                            alt="About VisionAI"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}