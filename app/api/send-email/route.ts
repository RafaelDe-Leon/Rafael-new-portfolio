import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Check if we're in development/preview mode
const isDevelopment = process.env.NODE_ENV === "development" || !process.env.VERCEL_ENV

export async function POST(request: NextRequest) {
  try {
    // Get form data from request
    const formData = await request.json()
    const { name, email, subject, message } = formData

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In development, log the email instead of sending it
    if (isDevelopment) {
      console.log("==========================================")
      console.log("📧 EMAIL WOULD BE SENT IN PRODUCTION")
      console.log("==========================================")
      console.log("From:", email)
      console.log("Name:", name)
      console.log("Subject:", subject)
      console.log("Message:", message)
      console.log("==========================================")

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Return success response
      return NextResponse.json({
        success: true,
        development: true,
        message: "Email logged to console (development mode)",
      })
    }

    // In production, send the actual email
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: "rdmail88@gmail.com", // Your receiving email
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #8B0000;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <h3 style="margin-top: 20px;">Message:</h3>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
    ${message.replace(/\n/g, "<br>")}
  </div>
</div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Return success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

