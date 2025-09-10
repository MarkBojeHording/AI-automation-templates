import { NextRequest, NextResponse } from 'next/server'
import { HeadshotRequest, HeadshotResponse } from '@/lib/api'

export async function POST(request: NextRequest) {
  try {
    const body: HeadshotRequest = await request.json()

    // Forward to n8n webhook
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/generate-headshot'
    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { success: false, error: 'Webhook URL not configured' },
        { status: 500 }
      )
    }

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data: HeadshotResponse = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
