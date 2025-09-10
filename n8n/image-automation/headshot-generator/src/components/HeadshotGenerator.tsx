'use client'
import { useState } from 'react'
import { Download, RefreshCw } from 'lucide-react'
import ImageUpload from './ImageUpload'
import StyleSelector from './StyleSelector'
import LoadingSpinner from './LoadingSpinner'
import { generateHeadshot } from '@/lib/api'
import { downloadImage } from '@/lib/utils'

export default function HeadshotGenerator() {
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [imageBase64, setImageBase64] = useState<string>('')
  const [selectedStyle, setSelectedStyle] = useState('professional')
  const [selectedBackground, setSelectedBackground] = useState('office')
  const [selectedClothing, setSelectedClothing] = useState('suit')
  const [generatedImage, setGeneratedImage] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string>('')

  const handleImageSelect = (file: File, base64: string) => {
    setSelectedImage(URL.createObjectURL(file))
    setImageBase64(base64)
    setError('')
  }

  const handleClear = () => {
    setSelectedImage('')
    setImageBase64('')
    setGeneratedImage('')
    setError('')
  }

  const handleGenerate = async () => {
    if (!imageBase64) {
      setError('Please upload an image first')
      return
    }

    setIsGenerating(true)
    setError('')

    try {
      const result = await generateHeadshot({
        image: imageBase64,
        style: selectedStyle,
        background: selectedBackground,
        clothing: selectedClothing,
      })

      if (result.success && result.image) {
        setGeneratedImage(`data:image/jpeg;base64,${result.image}`)
      } else {
        setError(result.error || 'Failed to generate headshot')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      downloadImage(generatedImage, 'professional-headshot.jpg')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Headshot Generator</h1>
          <p className="text-gray-600">Transform your photos into professional headshots with AI</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Upload & Options */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upload & Customize</h2>

            <div className="space-y-6">
              <ImageUpload
                onImageSelect={handleImageSelect}
                selectedImage={selectedImage}
                onClear={handleClear}
              />

              {selectedImage && (
                <>
                  <StyleSelector
                    selectedStyle={selectedStyle}
                    selectedBackground={selectedBackground}
                    selectedClothing={selectedClothing}
                    onStyleChange={setSelectedStyle}
                    onBackgroundChange={setSelectedBackground}
                    onClothingChange={setSelectedClothing}
                  />

                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isGenerating ? 'Generating...' : 'Generate Headshot'}
                  </button>
                </>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Result */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Generated Headshot</h2>

            <div className="min-h-[400px] flex items-center justify-center">
              {isGenerating ? (
                <LoadingSpinner />
              ) : generatedImage ? (
                <div className="w-full">
                  <img
                    src={generatedImage}
                    alt="Generated headshot"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                  <button
                    onClick={handleDownload}
                    className="mt-4 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download Headshot
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <RefreshCw className="h-12 w-12 text-gray-400" />
                  </div>
                  <p>Your generated headshot will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
