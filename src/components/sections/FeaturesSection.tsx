// src/components/landing-page/FeaturesSection.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Shield, Award, Users } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur AI yang Kuat</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Model pembelajaran mesin kami yang canggih menyediakan kemampuan analisis gambar yang komprehensif
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-100">
                        <CardHeader className="flex flex-col items-center justify-center text-center">
                            <Brain className="w-12 h-12 text-blue-600 mb-4" />
                            <CardTitle>Deteksi Objek</CardTitle>
                            <CardDescription>Mengidentifikasi dan menemukan beberapa objek dalam gambar dengan kotak pembatas yang presisi</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-100">
                         <CardHeader className="flex flex-col items-center justify-center text-center">
                            <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
                            <CardTitle>Klasifikasi Gambar</CardTitle>
                            <CardDescription>Mengklasifikasikan gambar ke dalam ribuan kategori dengan skor kepercayaan</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-100">
                        <CardHeader className="flex flex-col items-center justify-center text-center">
                            <Zap className="w-12 h-12 text-yellow-600 mb-4" />
                            <CardTitle>Analisis Real-time</CardTitle>
                            <CardDescription>Dapatkan hasil instan dengan pipeline inferensi yang dioptimalkan</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-100">
                        <CardHeader className="flex flex-col items-center justify-center text-center">
                            <Shield className="w-12 h-12 text-red-600 mb-4" />
                            <CardTitle>Privasi Utama</CardTitle>
                            <CardDescription>Gambar Anda diproses secara aman dan tidak pernah disimpan secara permanen</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-100">
                        <CardHeader className="flex flex-col items-center justify-center text-center">
                            <Award className="w-12 h-12 text-purple-600 mb-4" />
                            <CardTitle>Akurasi Tinggi</CardTitle>
                            <CardDescription>Model canggih yang dilatih dengan jutaan gambar untuk presisi maksimal</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-gray-100">
                        <CardHeader className="flex flex-col items-center justify-center text-center">
                            <Users className="w-12 h-12 text-indigo-600 mb-4" />
                            <CardTitle>Akses API</CardTitle>
                            <CardDescription>Integrasikan kemampuan AI kami ke dalam aplikasi Anda dengan REST API kami</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}