// src/components/landing-page/StatsSection.tsx

export default function StatsSection() {
    return (
        <section className="py-20 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold mb-2">4</div>
                        <div className="text-blue-100">Kondisi Daun dapat diidentifikasi</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">99.9%</div>
                        <div className="text-blue-100">Accuracy Rate</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">8K+</div>
                        <div className="text-blue-100">Data Training</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">24/7</div>
                        <div className="text-blue-100">Gunakan Kapan Saja</div>
                    </div>
                </div>
            </div>
        </section>
    );
}