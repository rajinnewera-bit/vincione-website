import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-section container" aria-label="Hero">
      <div className="hero-grid">
        <div className="eyebrow">BUSINESS SYSTEMS • AUTOMATION • INTELLIGENCE</div>
        <h1>Business problems deserve better than another spreadsheet.</h1>
        <div className="hero-support">
          <p className="lead">Vinci.One designs practical business applications, automation and intelligent systems around the way organisations actually work.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/what-we-build">Explore What We Build</Link>
            <Link className="text-link" to="/contact">Discuss a Business Problem <span aria-hidden="true">→</span></Link>
          </div>
          <div className="founder-led">Founder-led <span /> Built from real operating experience</div>
        </div>
      </div>
    </section>
  )
}
