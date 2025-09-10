export interface HeadshotRequest {
  image: string // base64 encoded image
  style: string
  background: string
  clothing: string
}

export interface HeadshotResponse {
  success: boolean
  image?: string // base64 encoded result image
  error?: string
}

export async function generateHeadshot(request: HeadshotRequest): Promise<HeadshotResponse> {
  try {
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '/api/generate-headshot'

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error generating headshot:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }
  }
}

export const STYLE_OPTIONS = [
  { id: 'professional', label: 'Professional', description: 'Business formal attire' },
  { id: 'casual', label: 'Casual', description: 'Smart casual wear' },
  { id: 'creative', label: 'Creative', description: 'Artistic and modern' },
  { id: 'corporate', label: 'Corporate', description: 'Executive style' },
  { id: 'medical', label: 'Medical', description: 'Healthcare professional' },
] as const

export const BACKGROUND_OPTIONS = [
  { id: 'office', label: 'Office', description: 'Professional office setting' },
  { id: 'studio', label: 'Studio', description: 'Clean studio background' },
  { id: 'outdoor', label: 'Outdoor', description: 'Natural outdoor setting' },
  { id: 'white', label: 'White', description: 'Clean white background' },
] as const

export const CLOTHING_OPTIONS = [
  { id: 'suit', label: 'Suit', description: 'Formal business suit' },
  { id: 'blazer', label: 'Blazer', description: 'Business blazer' },
  { id: 'shirt', label: 'Shirt', description: 'Professional shirt' },
  { id: 'casual', label: 'Casual', description: 'Smart casual wear' },
] as const
