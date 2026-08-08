import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', contact: '', message: '' })

  function update(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function mailtoFallback(e) {
    e.preventDefault()
    const subject = encodeURIComponent('Vinci.One — Discuss a business problem')
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nContact: ${form.contact}\n\nProblem:\n${form.message}`)
    window.location.href = `mailto:rajinnnewera@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="page-section contact container">
      <header className="page-header contact-header">
        <p className="section-kicker">Start a conversation</p>
        <h1>Discuss a Business Problem</h1>
        <p className="page-lead">If you are dealing with a repetitive process, reporting problem or fragmented workflow, describe the problem first.</p>
      </header>

      <div className="contact-grid">
        <form onSubmit={mailtoFallback} className="contact-form" aria-label="Contact form">
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" value={form.name} onChange={update} /></label>
            <label>Company / Organisation<input name="company" autoComplete="organization" value={form.company} onChange={update} /></label>
          </div>
          <label>Email / Phone<input name="contact" autoComplete="email" value={form.contact} onChange={update} /></label>
          <label>
            What problem are you trying to solve?
            <textarea name="message" rows={6} value={form.message} onChange={update} />
          </label>

          <div className="form-actions">
            <button className="btn primary" type="submit">Start the Conversation</button>
          </div>
        </form>

        <div className="contact-details">
          <p className="section-kicker">Direct contact</p>
          <dl>
            <div><dt>Email</dt><dd><a href="mailto:rajinnnewera@gmail.com">rajinnnewera@gmail.com</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+919678139208">+91 96781 39208</a></dd></div>
            <div><dt>Location</dt><dd>Guwahati, Assam, India</dd></div>
          </dl>
          <a className="text-link" href="https://www.linkedin.com/in/rajdeep-dutta-59ba36394/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
