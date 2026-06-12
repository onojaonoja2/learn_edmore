import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { formType, ...data } = body

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const fields = Object.entries(data)
      .map(([key, val]) => {
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
        const value = Array.isArray(val) ? val.join(', ') : String(val)
        return `${label}: ${value}`
      })
      .join('\n')

    const subject = `New ${formType.replace(/_/g, ' ')} Submission - Learn Edmore`

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'learnedmoreconsult@gmail.com',
      subject,
      text: fields,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
