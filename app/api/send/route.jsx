import { NextResponse } from 'next/server'
import { ContactEmail } from '@/emails/ContactEmail'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { firstName, email, message } = await request.json()

  try {
    await resend.sendEmail({
      from: process.env.MAIL_FROM || '',
      to: 'educalvolopez@gmail.com',
      subject: 'Contacto educalvolopez.com',
      react: ContactEmail({
        firstName,
        email,
        message,
      }),
    })
    return NextResponse.json(
      {
        status: 'Ok',
      },
      {
        status: 200,
      }
    )
  } catch (e) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`)
    }
    return NextResponse.json(
      {
        error: 'Internal server error.',
      },
      {
        status: 500,
      }
    )
  }
}
