import { NextResponse } from 'next/server';
import { Resend } from 'resend';



import { ContactEmail } from '@/emails/ContactEmail'


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  const { firstName, email, message } = await request.json()
  try {
      await resend.sendEmail({
        from: 'onboarding@resend.dev',
        to: 'educalvolopez@gmail.com',
        replyTo: email,
        subject: 'Contacto educalvolopez.com',
        react: ContactEmail({ firstName, email, message }),
      })
 return NextResponse.json({
      status: 'Ok'
    }, {
      status: 200
    })
  } catch(e) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error.'
    }, {
      status: 500
    })
  }


}