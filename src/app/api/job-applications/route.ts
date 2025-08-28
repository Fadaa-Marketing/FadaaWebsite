// app/api/job-applications/route.ts
import { NextResponse } from 'next/server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function POST(request: Request) {
  const formData = await request.formData()

  try {
    // Validate required fields
    const requiredFields = ['job_id', 'full_name', 'email', 'phone', 'resume']
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { error: `${field.replace('_', ' ')} is required` },
          { status: 400 }
        )
      }
    }

    // Prepare the payload
    const payload = {
      job_id: formData.get('job_id'),
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      resume: formData.get('resume')
    }

    // Forward to your external API
    const apiResponse = await fetch(`${API_BASE_URL}/api/job-applications`, {
      method: 'POST',
      body: formData,
      headers: {
      }
    })

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json()
      throw new Error(errorData.message || 'API request failed')
    }

    const data = await apiResponse.json()

    return NextResponse.json(data, { status: apiResponse.status })

  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    )
  }
}