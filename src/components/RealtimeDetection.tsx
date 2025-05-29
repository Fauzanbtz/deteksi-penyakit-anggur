'use client';

import { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

// Definisikan ukuran input model
const IMG_WIDTH = 224;
const IMG_HEIGHT = 224;

// Definisikan nama-nama kelas sesuai urutan di model Anda
const CLASS_LABELS = [
  'Grape___Black_rot',
  'Grape___Esca_(Black_Measles)',
  'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
  'Grape___healthy'
];

interface DetectionResult {
  label: string;
  confidence: number;
}

interface RealtimeDetectionProps {
  onDetectionResults?: (results: DetectionResult[]) => void;
}

export default function RealtimeDetection({ onDetectionResults }: RealtimeDetectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [predictedClass, setPredictedClass] = useState<string>('Initializing...');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [detectionResults, setDetectionResults] = useState<DetectionResult[]>([]);

  // Initialize TensorFlow.js and load model
  useEffect(() => {
    const initializeTF = async () => {
      try {
        await tf.setBackend('webgl');
        await tf.ready();

        const modelPath = '/tfjs_model/model.json';
        const response = await fetch(modelPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch model.json: ${response.status} ${response.statusText}`);
        }
        await response.json();

        const loadedModel = await tf.loadGraphModel(modelPath, {
          fromTFHub: false
        });

        setModel(loadedModel);
        setIsLoading(false);
        setPredictedClass('Model loaded. Ready to analyze images.');
      } catch (err) {
        console.error('Error initializing TensorFlow.js or loading model:', err);
        setError(err instanceof Error ? err.message : 'Failed to load model');
        setIsLoading(false);
        setPredictedClass('Failed to load model.');
      }
    };

    initializeTF();

    return () => {
      if (model) {
        model.dispose();
      }
    };
  }, []);

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        analyzeImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Analyze uploaded image
  const analyzeImage = async (imageData: string) => {
    if (!model) return;

    try {
      const img = new Image();
      img.src = imageData;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const canvas = document.createElement('canvas');
      canvas.width = IMG_WIDTH;
      canvas.height = IMG_HEIGHT;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);

      const imgTensor = tf.tidy(() => {
        return tf.browser.fromPixels(canvas)
          .toFloat()
          .div(255.0)
          .expandDims(0);
      });

      // Run detection using execute()
      const predictions = model.execute(imgTensor) as tf.Tensor;
      const scores = predictions.dataSync();

      // Create array of results with confidence scores
      const results: DetectionResult[] = CLASS_LABELS.map((label, index) => ({
        label,
        confidence: scores[index]
      }));

      // Sort results by confidence
      results.sort((a, b) => b.confidence - a.confidence);

      // Update state with all results
      setDetectionResults(results);
      
      // Notify parent component of results
      if (onDetectionResults) {
        onDetectionResults(results);
      }

      // Set the highest confidence prediction
      const maxIndex = scores.indexOf(Math.max(...scores));
      const confidence = scores[maxIndex];
      const predictedClass = CLASS_LABELS[maxIndex];
      setPredictedClass(`${predictedClass} (${(confidence * 100).toFixed(2)}%)`);

      tf.dispose([imgTensor, predictions]);
    } catch (err) {
      console.error('Error analyzing image:', err);
      setError('Error analyzing image: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  if (error) {
    return (
      <div className="text-red-500 p-4 border border-red-500 rounded">
        Error: {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">{predictedClass}</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex flex-col gap-4 mb-4">
        <label className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors cursor-pointer text-center">
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
        <div className="relative">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">{predictedClass}</p>
      </div>
    </div>
  );
}
