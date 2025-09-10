import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function validateImageFile(file: File): { isValid: boolean; error?: string } {
  const maxSize = 10 * 1024 * 1024 // 10MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']

  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'Please upload a JPG or PNG image' }
  }

  if (file.size > maxSize) {
    return { isValid: false, error: 'Image size must be less than 10MB' }
  }

  return { isValid: true }
}

export function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string
      // Remove the data:image/...;base64, prefix
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = (error) => reject(error)
  })
}

export function downloadImage(imageUrl: string, filename: string = 'headshot.jpg') {
  const link = document.createElement('a')
  link.href = imageUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
