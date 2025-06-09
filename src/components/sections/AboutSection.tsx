// src/components/landing-page/AboutSection.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ContohGambar from "@/public/contoh.jpg";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cara Pengambilan Gambar yang Disarankan</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Gambar yang diambil harus di foto dari atas dengan cahaya yang cukup dan daun harus terlihat jelas.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Berikut adalah contoh gambar yang dapat diambil
                        </p>
                    </div>
                    <div className="relative">
                        <Image
                            src={"/contoh.jpg"} // Ganti dengan path gambar yang relevan
                            alt="Tentang Daun Anggurku"
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