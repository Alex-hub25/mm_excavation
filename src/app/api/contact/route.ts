import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
  recaptchaToken: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    const { name, email, phone, project, message, recaptchaToken } = formData;

    // Validate required fields
    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'Server configuration error: reCAPTCHA not set up' },
        { status: 500 }
      );
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const verifyResponse = await fetch(verifyUrl, { method: 'POST' });
    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.error('reCAPTCHA verification failed:', verifyData);
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey || resendApiKey === 'your_resend_api_key_here') {
      console.error('RESEND_API_KEY is not configured properly');
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Email service not set up' },
        { status: 500 }
      );
    }

    // Initialize Resend with the API key
    const resend = new Resend(resendApiKey);

    // Send email using Resend
        const emailTo = process.env.CONTACT_EMAIL_TO;
    if (!emailTo) {
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Contact email not set' },
        { status: 500 }
      );
    }
    const emailFrom = process.env.CONTACT_EMAIL_FROM || 'lucasclavenna5@gmail.com';

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e67e22;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p style="margin: 10px 0;"><strong>Project Type:</strong> ${project || 'Not specified'}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #e67e22; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #555; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
          <p>This email was sent from the M & M Excavation and Dirtwork website contact form.</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `New Contact Form: ${name} - ${project || 'General Inquiry'}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      emailId: data?.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred processing your request' },
      { status: 500 }
    );
  }
}
