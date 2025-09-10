'use client'
import { STYLE_OPTIONS, BACKGROUND_OPTIONS, CLOTHING_OPTIONS } from '@/lib/api'

interface StyleSelectorProps {
  selectedStyle: string
  selectedBackground: string
  selectedClothing: string
  onStyleChange: (style: string) => void
  onBackgroundChange: (background: string) => void
  onClothingChange: (clothing: string) => void
}

export default function StyleSelector({
  selectedStyle,
  selectedBackground,
  selectedClothing,
  onStyleChange,
  onBackgroundChange,
  onClothingChange
}: StyleSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Style</h3>
        <div className="grid grid-cols-2 gap-2">
          {STYLE_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => onStyleChange(option.id)}
              className={`p-3 text-left rounded-lg border transition-colors ${
                selectedStyle === option.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm text-gray-500">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Background</h3>
        <div className="grid grid-cols-2 gap-2">
          {BACKGROUND_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => onBackgroundChange(option.id)}
              className={`p-3 text-left rounded-lg border transition-colors ${
                selectedBackground === option.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm text-gray-500">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Clothing</h3>
        <div className="grid grid-cols-2 gap-2">
          {CLOTHING_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => onClothingChange(option.id)}
              className={`p-3 text-left rounded-lg border transition-colors ${
                selectedClothing === option.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm text-gray-500">{option.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
