// src/components/RealtimeDetection.tsx

'use client';

import { useState } from 'react';

interface DetectionResult {
  label: string;
  confidence: number;
}

interface RealtimeDetectionProps {
  onDetectionResults: (results: DetectionResult[]) => void;
  onAnalysisStart: () => void;
  onAnalysisEnd: () => void;
  onError: (errorMessage: string) => void;
}

const API_URL = 'https://zubetz-KLASIFIKASI-CITRA-DAUN-ANGGUR.hf.space/predict';

export default function RealtimeDetection({ 
  onDetectionResults, 
  onAnalysisStart, 
  onAnalysisEnd,
  onError
}: RealtimeDetectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      analyzeImageWithAPI(file);
    }
  };

  const analyzeImageWithAPI = async (imageFile: File) => {
    onAnalysisStart();
    onDetectionResults([]);
    onError('');

    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server error: ${response.statusText}`);
      }

      const result = await response.json();
      
      const allProbs = result.all_probabilities;
      const formattedResults: DetectionResult[] = Object.entries(allProbs).map(([label, confidenceStr]) => {
        const confidenceValue = parseFloat((confidenceStr as string).replace('%', '')) / 100;
        return {
          label: label,
          confidence: confidenceValue
        };
      });

      formattedResults.sort((a, b) => b.confidence - a.confidence);

      onDetectionResults(formattedResults);

    } catch (err) {
      console.error('Error calling API:', err);
      onError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      onAnalysisEnd();
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-4 mb-4">
        <label className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center font-semibold">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {selectedImage && (
        <div className="relative mt-4 border rounded-lg overflow-hidden">
          <img
            src={selectedImage}
            alt="Uploaded for analysis"
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}