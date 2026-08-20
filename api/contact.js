const RECIPIENT_EMAIL = 'rajdeep@vincione.in'
const MAX_LENGTHS = {
  name: 120,
  company: 160,
  contact: 160,
  message: 4000,
}

function json(response, status, body) {
  return response.status(status).json(body)
}

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function singleLine(value) {
  return value.replace(/[\r\n]+/g, ' ')
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return json(response, 405, { error: 'Method not allowed.' })
  }

  if (!request.headers['content-type']?.includes('application/json')) {
    return json(response, 415, { error: 'Unsupported request format.' })
  }

  const body = request.body ?? {}

  // Silently accept automated submissions that fill the hidden honeypot field.
  if (typeof body.website === 'string' && body.website.trim()) {
    return json(response, 200, { success: true })
  }

  const enquiry = {
    name: clean(body.name, MAX_LENGTHS.name),
    company: clean(body.company, MAX_LENGTHS.company),
    contact: clean(body.contact, MAX_LENGTHS.contact),
    message: clean(body.message, MAX_LENGTHS.message),
  }

  if (Object.values(enquiry).some(value => !value)) {
    return json(response, 400, { error: 'Please complete all required fields.' })
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    console.error('Contact email service is not configured.')
    return json(response, 503, { error: 'The enquiry service is temporarily unavailable. Please try again later.' })
  }

  const emailText = [
    'New enquiry submitted through vincione.in',
    '',
    `Name: ${enquiry.name}`,
    `Company / Organisation: ${enquiry.company}`,
    `Email / Phone: ${enquiry.contact}`,
    '',
    'What problem are you trying to solve?',
    enquiry.message,
  ].join('\n')

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [RECIPIENT_EMAIL],
        subject: `Vinci.One website enquiry from ${singleLine(enquiry.name)}`,
        text: emailText,
      }),
    })

    if (!resendResponse.ok) {
      const providerError = await resendResponse.text()
      console.error('Contact email delivery failed:', resendResponse.status, providerError)
      return json(response, 502, { error: 'Your query could not be submitted right now. Please try again.' })
    }

    return json(response, 200, { success: true })
  } catch (error) {
    console.error('Contact email request failed:', error)
    return json(response, 502, { error: 'Your query could not be submitted right now. Please try again.' })
  }
}
