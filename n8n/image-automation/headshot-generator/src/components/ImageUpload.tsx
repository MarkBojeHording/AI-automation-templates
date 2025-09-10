'use client'
import { useCallback, useState } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'
import { validateImageFile, convertToBase64 } from '@/lib/utils'

interface ImageUploadProps {
  onImageSelect: (file: File, base64: string) => void
  selectedImage?: string
  onClear: () => void
}

export default function ImageUpload({ onImageSelect, selectedImage, onClear }: ImageUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [error, setError] = useState<string>('')

  const handleFile = useCallback(async (file: File) => {
    setError('')
    const validation = validateImageFile(file)

    if (!validation.isValid) {
      setError(validation.error || 'Invalid file')
      return
    }

    try {
      const base64 = await convertToBase64(file)
      onImageSelect(file, base64)
    } catch (err) {
      setError('Failed to process image')
    }
  }, [onImageSelect])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="w-full">
      {!selectedImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
          onDragLeave={() => setIsDragOver(false)}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg font-medium text-gray-900 mb-2">Upload your photo</p>
          <p className="text-gray-500 mb-4">Drag and drop or click to browse</p>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleFileInput}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            Choose File
          </label>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      ) : (
        <div className="relative">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-64 object-cover rounded-lg"
          />
          <button
            onClick={onClear}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
