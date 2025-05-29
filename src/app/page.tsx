"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Upload,
  Brain,
  Zap,
  Shield,
  CheckCircle,
  Github,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Camera,
  BarChart3,
  Users,
  Award,
} from "lucide-react"
import RealtimeDetection from '@/components/RealtimeDetection'

interface DetectionResult {
  label: string;
  confidence: number;
}

interface AnalysisResult {
  predictions: DetectionResult[];
  objects: {
    name: string;
    bbox: number[];
    confidence: number;
  }[];
  colors: string[];
  tags: string[];
}

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [detectionResults, setDetectionResults] = useState<DetectionResult[]>([])
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

  const handleDetectionResults = (results: DetectionResult[]) => {
    setDetectionResults(results);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = async () => {
    if (!selectedImage) return

    setIsAnalyzing(true)
    // Simulate ML analysis
    setTimeout(() => {
      setAnalysisResult({
        predictions: [
          { label: "Cat", confidence: 0.95 },
          { label: "Domestic Animal", confidence: 0.89 },
          { label: "Mammal", confidence: 0.87 },
        ],
        objects: [
          { name: "Cat", bbox: [120, 80, 200, 160], confidence: 0.92 },
          { name: "Eyes", bbox: [140, 95, 180, 115], confidence: 0.88 },
        ],
        colors: ["#8B4513", "#FFFFFF", "#000000"],
        tags: ["pet", "animal", "cute", "furry"],
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">VisionAI</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">AI-Powered Image Analysis</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Upload any image and get instant AI-powered analysis including object detection, classification, and
              detailed insights using state-of-the-art machine learning models.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Lightning Fast
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Secure & Private
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                99.9% Accuracy
              </Badge>
            </div>
          </div>

          {/* Image Upload and Analysis Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Camera Preview Section */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Image Upload
                </CardTitle>
                <CardDescription>Upload an image for disease detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <RealtimeDetection onDetectionResults={handleDetectionResults} />
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Detection Results
                </CardTitle>
                <CardDescription>Disease detection results and confidence scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Predictions */}
                  <div>
                    <h4 className="font-semibold mb-3">Detected Diseases</h4>
                    <div className="space-y-2" id="detection-results">
                      {detectionResults.length > 0 ? (
                        <div className="space-y-4">
                          {detectionResults.map((result, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="font-medium">{result.label.replace(/_/g, ' ')}</span>
                              <div className="flex items-center">
                                <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                                  <div
                                    className="h-full bg-blue-500 rounded-full"
                                    style={{ width: `${result.confidence * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm text-gray-600">
                                  {(result.confidence * 100).toFixed(2)}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12 text-gray-500">
                          <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>Upload an image to see detection results</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Confidence Scores */}
                  <div>
                    <h4 className="font-semibold mb-3">Confidence Scores</h4>
                    <div className="space-y-2" id="confidence-scores">
                      {detectionResults.length > 0 ? (
                        <div className="space-y-2">
                          {detectionResults.map((result, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{result.label.replace(/_/g, ' ')}</span>
                              <span className="text-sm font-medium">
                                {(result.confidence * 100).toFixed(2)}%
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4 text-gray-500">
                          <p>No results available</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced machine learning models provide comprehensive image analysis capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Object Detection</CardTitle>
                <CardDescription>
                  Identify and locate multiple objects within images with precise bounding boxes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Image Classification</CardTitle>
                <CardDescription>Classify images into thousands of categories with confidence scores</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-600 mb-4" />
                <CardTitle>Real-time Analysis</CardTitle>
                <CardDescription>Get instant results with our optimized inference pipeline</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>Your images are processed securely and never stored permanently</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>High Accuracy</CardTitle>
                <CardDescription>
                  State-of-the-art models trained on millions of images for maximum precision
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Integrate our AI capabilities into your applications with our REST API
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get AI-powered insights from your images
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload Image</h3>
              <p className="text-gray-600">Simply drag and drop or click to upload your image file</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-gray-600">Our advanced ML models process and analyze your image</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Get Results</h3>
              <p className="text-gray-600">Receive detailed insights, classifications, and object detection results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Images Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                src="/placeholder.svg?height=400&width=500"
                alt="About VisionAI"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">VisionAI</span>
              </div>
              <p className="text-gray-400 mb-4">AI-powered image analysis platform for everyone.</p>
              <div className="flex space-x-4">
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 VisionAI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Real-time Object Detection</h1>
        <RealtimeDetection />
      </div>
    </div>
  )
}
