// src/components/landing-page/HowItWorksSection.tsx

import { Upload, Brain, BarChart3 } from "lucide-react";

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Langkah-langkah sederhana untuk mendapatkan wawasan berbasis AI dari gambar Anda
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Upload className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">1. Unggah Gambar</h3>
                        <p className="text-gray-600">Klik tombol unggah dan pilih gambar yang ingin Anda analisis</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Brain className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">2. Analisis AI</h3>
                        <p className="text-gray-600">Model Deep Learning canggih kami memproses dan menganalisis gambar Anda</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BarChart3 className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">3. Dapatkan Hasil</h3>
                        <p className="text-gray-600">Terima wawasan detail, klasifikasi, dan hasil deteksi objek</p>
                    </div>
                </div>
            </div>
        </section>
    );
}