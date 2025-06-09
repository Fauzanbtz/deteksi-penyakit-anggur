// src/components/landing-page/ContactSection.tsx

import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ada pertanyaan? Kami ingin mendengar dari Anda. Kirimkan pesan dan kami akan merespons secepat mungkin.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 justify-center">
                    <Card className="p-6 text-center">
                        <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Email Kami</h3>
                        <p className="text-gray-600 mb-4">Hubungi kami melalui email</p>
                        <p className="text-blue-600">fauzanbtz@gmail.com</p>
                    </Card>
                    <Card className="p-6 text-center">
                        <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Telepon Kami</h3>
                        <p className="text-gray-600 mb-4">Sen-Jum 09:00-18:00 WIB</p>
                        <p className="text-green-600">+62 8577-7816-578</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}