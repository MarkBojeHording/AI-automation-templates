# Professional Headshot Generator

A modern, responsive web application for generating professional headshots using AI. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Drag & Drop Image Upload** - Easy file upload with validation
- **Style Customization** - Choose from Professional, Casual, Creative, Corporate, or Medical styles
- **Background Options** - Office, Studio, Outdoor, or White backgrounds
- **Clothing Styles** - Suit, Blazer, Shirt, or Casual options
- **Real-time Preview** - See your uploaded image immediately
- **AI Generation** - Generate professional headshots via n8n webhook
- **Download Results** - Download your generated headshots
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Glassmorphism UI** - Modern, professional design

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vercel** ready for deployment

## Setup

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env.local` file with:
   ```env
   N8N_WEBHOOK_URL=http://localhost:5678/webhook/generate-headshot
   NEXT_PUBLIC_N8N_WEBHOOK_URL=/api/generate-headshot
   ```

   **Note:** The app is configured to use `http://localhost:5678/webhook/generate-headshot` as the default n8n webhook URL. You can override this by setting the `N8N_WEBHOOK_URL` environment variable.

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Deploy to Vercel:**
   ```bash
   npm run build
   vercel deploy
   ```

## N8N Integration

The app sends POST requests to your n8n webhook with the following payload:

```json
{
  "image": "base64_encoded_image",
  "style": "professional|casual|creative|corporate|medical",
  "background": "office|studio|outdoor|white",
  "clothing": "suit|blazer|shirt|casual"
}
```

Expected response:
```json
{
  "success": true,
  "image": "base64_encoded_result_image"
}
```

## File Structure

```
src/
├── app/
│   ├── api/generate-headshot/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── HeadshotGenerator.tsx
│   ├── ImageUpload.tsx
│   ├── LoadingSpinner.tsx
│   └── StyleSelector.tsx
└── lib/
    ├── api.ts
    └── utils.ts
```

## Customization

- **Styles**: Modify `STYLE_OPTIONS` in `src/lib/api.ts`
- **Colors**: Update Tailwind classes in components
- **Layout**: Adjust grid layouts in `HeadshotGenerator.tsx`
- **Validation**: Modify file validation in `src/lib/utils.ts`

## License

MIT License - feel free to use and customize for your projects.
