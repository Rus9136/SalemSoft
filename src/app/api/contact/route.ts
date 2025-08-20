import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    const { name, phone, email, company, message } = body
    
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Заполните обязательные поля' },
        { status: 400 }
      )
    }

    // Simulate form processing
    console.log('New contact form submission:', {
      name,
      phone,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    })

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Integrate with CRM
    // 4. Send to Telegram/WhatsApp
    
    // For now, just return success
    return NextResponse.json(
      { message: 'Заявка успешно отправлена' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки' },
      { status: 500 }
    )
  }
}