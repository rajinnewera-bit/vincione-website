import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', contact: '', message: '' })
  const [submission, setSubmission] = useState({ status: 'idle', message: '' })

  function update(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (submission.status !== 'idle') setSubmission({ status: 'idle', message: '' })
  }

  async function submitEnquiry(e) {
    e.preventDefault()
    const website = e.currentTarget.elements.website.value
    setSubmission({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Your query could not be submitted right now. Please try again.')
      }

      setForm({ name: '', company: '', contact: '', message: '' })
      setSubmission({
        status: 'success',
        message: "Thank you. Your query has been submitted successfully. We'll be in touch soon.",
      })
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error.message || 'Your query could not be submitted right now. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="page-section contact container">
      <header className="page-header contact-header">
        <p className="section-kicker">Start a conversation</p>
        <h1>Discuss a Business Problem</h1>
        <p className="page-lead">If you are dealing with a repetitive process, reporting problem or fragmented workflow, describe the problem first.</p>
      </header>

      <div className="contact-grid">
        <form onSubmit={submitEnquiry} className="contact-form" aria-label="Contact form">
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" maxLength={120} required value={form.name} onChange={update} /></label>
            <label>Company / Organisation<input name="company" autoComplete="organization" maxLength={160} required value={form.company} onChange={update} /></label>
          </div>
          <label>Email / Phone<input name="contact" autoComplete="email" maxLength={160} required value={form.contact} onChange={update} /></label>
          <label>
            What problem are you trying to solve?
            <textarea name="message" rows={6} maxLength={4000} required value={form.message} onChange={update} />
          </label>
          <div className="form-honeypot" aria-hidden="true">
            <label>Website<input name="website" autoComplete="off" tabIndex={-1} /></label>
          </div>

          <div className="form-actions">
            <button className="btn primary" type="submit" disabled={submission.status === 'loading'}>
              {submission.status === 'loading' && <span className="submit-spinner" aria-hidden="true" />}
              {submission.status === 'loading' ? 'Submitting…' : 'Submit Your Query'}
            </button>
            <p className="form-assurance">We&apos;ll review your message and get back to you soon.</p>
          </div>

          <div className={`form-message${submission.status !== 'idle' ? ` ${submission.status}` : ''}`} aria-live="polite" role={submission.status === 'error' ? 'alert' : 'status'}>
            {submission.message}
          </div>
        </form>

        <div className="contact-details">
          <p className="section-kicker">Direct contact</p>
          <dl>
            <div><dt>Email</dt><dd><a href="mailto:rajdeep@vincione.in">rajdeep@vincione.in</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+919678139208">+91 96781 39208</a></dd></div>
            <div><dt>Location</dt><dd>Guwahati, Assam, India</dd></div>
          </dl>
          <a className="text-link" href="https://www.linkedin.com/in/rajdeep-dutta-59ba36394/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
