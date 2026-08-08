import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-section container" aria-label="Hero">
      <div className="hero-copy">
        <div className="eyebrow">BUSINESS SYSTEMS • AUTOMATION • INTELLIGENCE</div>
        <h1>Business problems deserve better than another spreadsheet.</h1>
        <p className="lead">Vinci.One designs practical business applications, automation and intelligent systems around the way organisations actually work.</p>

        <div className="hero-actions">
          <Link className="btn primary" to="/what-we-build">Explore What We Build</Link>
          <Link className="btn outline" to="/contact">Discuss a Business Problem</Link>
        </div>

        <div className="founder-led">Founder-led • Built from real operating experience</div>
      </div>
    </section>
  )
}
