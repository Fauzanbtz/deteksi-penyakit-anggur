// src/components/landing-page/ContactSection.tsx

import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    <Card className="p-6 text-center">
                        <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <p className="text-gray-600 mb-4">Get in touch via email</p>
                        <p className="text-blue-600">contact@visionai.com</p>
                    </Card>
                    <Card className="p-6 text-center">
                        <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                        <p className="text-gray-600 mb-4">Mon-Fri 9am-6pm PST</p>
                        <p className="text-green-600">+1 (555) 123-4567</p>
                    </Card>
                    <Card className="p-6 text-center">
                        <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                        <p className="text-gray-600 mb-4">Come say hello</p>
                        <p className="text-red-600">San Francisco, CA</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}