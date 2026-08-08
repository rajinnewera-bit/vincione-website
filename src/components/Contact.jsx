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
    <section id="contact" className="section contact container">
      <div className="section-head">
        <div>
          <h2>Discuss a Business Problem</h2>
          <p className="muted">If you are dealing with a repetitive process, reporting problem or fragmented workflow, describe the problem first.</p>
        </div>
      </div>

      <div className="contact-grid">
        <form onSubmit={mailtoFallback} className="contact-form" aria-label="Contact form">
          <label>
            Name
            <input name="name" value={form.name} onChange={update} />
          </label>
          <label>
            Company / Organisation
            <input name="company" value={form.company} onChange={update} />
          </label>
          <label>
            Email / Phone
            <input name="contact" value={form.contact} onChange={update} />
          </label>
          <label>
            What problem are you trying to solve?
            <textarea name="message" rows={6} value={form.message} onChange={update} />
          </label>

          <div className="form-actions">
            <button className="btn primary" type="submit">Start the Conversation</button>
            <a className="btn outline" href="https://www.linkedin.com/in/rajdeep-dutta-59ba36394/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          </div>
        </form>

        <div className="contact-details">
          <h3>Contact</h3>
          <p className="muted">Email: <a href="mailto:rajinnnewera@gmail.com">rajinnnewera@gmail.com</a></p>
          <p className="muted">Phone: <a href="tel:+919678139208">+91 96781 39208</a></p>
          <p className="muted">Location: Guwahati, Assam, India</p>
        </div>
      </div>
    </section>
  )
}
