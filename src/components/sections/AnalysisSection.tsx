// src/components/landing-page/AnalysisSection.tsx

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, BarChart3, Brain, Stethoscope } from "lucide-react";
import RealtimeDetection from "@/components/RealtimeDetection";
import { Separator } from "@/components/ui/separator";
import { diseaseTreatments } from "@/lib/disease-data";
import ReactMarkdown from 'react-markdown'; // <-- 1. IMPORT LIBRARY BARU
import remarkGfm from 'remark-gfm';

interface DetectionResult {
  label: string;
  confidence: number;
}

export default function AnalysisSection() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectionResults, setDetectionResults] = useState<DetectionResult[]>([]);
  const [apiError, setApiError] = useState<string>('');
  const [treatmentInfo, setTreatmentInfo] = useState<string | null>(null);

  const handleDetectionResults = (results: DetectionResult[]) => {
    setDetectionResults(results);
    if (results.length > 0) {
      const topResultLabel = results[0].label;
      const info = diseaseTreatments[topResultLabel];
      setTreatmentInfo(info || "Informasi penanganan tidak tersedia untuk hasil ini.");
    } else {
      setTreatmentInfo(null);
    }
  };

  return (
    <section id="analysis" className="p-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kolom Upload Gambar */}
          <Card className="p-6 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Camera className="w-5 h-5" /> Image Upload</CardTitle>
              <CardDescription>Upload an image to start disease detection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <RealtimeDetection 
                  onDetectionResults={handleDetectionResults}
                  onAnalysisStart={() => {
                    setIsAnalyzing(true);
                    setTreatmentInfo(null);
                  }}
                  onAnalysisEnd={() => setIsAnalyzing(false)}
                  onError={(msg) => setApiError(msg)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Kolom Hasil Deteksi & Penanganan */}
          <Card className="p-6 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Detection Results</CardTitle>
              <CardDescription>Disease detection results and confidence scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* ... (bagian loading, error, dan daftar probabilitas tetap sama) ... */}
                 {!isAnalyzing && !apiError && detectionResults.length > 0 && (
                   <div className="space-y-4">
                     {detectionResults.map((result, index) => (
                       <div key={index} className="grid grid-cols-3 items-center gap-4">
                         <span className="col-span-1 font-medium text-gray-800">{result.label.replace(/___/g, ' ').replace(/_/g, ' ')}</span>
                         <div className="col-span-2 flex items-center">
                           <div className="w-full h-2.5 bg-gray-200 rounded-full mr-4">
                             <div className="h-full bg-blue-600 rounded-full" style={{ width: `${result.confidence * 100}%` }}/>
                           </div>
                           <span className="text-sm text-gray-600 font-mono w-16 text-right">{(result.confidence * 100).toFixed(2)}%</span>
                         </div>
                       </div>
                     ))}
                   </div>
                )}
                
                {/* --- BLOK UI YANG DIUBAH --- */}
                {!isAnalyzing && treatmentInfo && (
                  <div>
                    <Separator className="my-6" />
                    <div className="flex items-center gap-2 mb-3">
                      <Stethoscope className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-lg">Saran Penanganan</h4>
                    </div>
                    {/* 2. GANTI <p> DENGAN <ReactMarkdown> */}
                    <div className="prose prose-sm max-w-none text-gray-700 bg-gray-50 p-4 rounded-lg" style={{ whiteSpace: "pre-line" }}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{treatmentInfo}</ReactMarkdown>
                    </div>
                  </div>
                )}
                {/* --- AKHIR BLOK UI YANG DIUBAH --- */}
                
                {!isAnalyzing && !apiError && detectionResults.length === 0 && (
                   <div className="text-center py-12 text-gray-500">
                     <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                     <p>Upload an image to see detection results</p>
                   </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}