import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import HomeShowcase from '../components/HomeShowcase'

export default function Home() {
  return (
    <div className="home-page">
      <HomeShowcase />

      <Hero />

      <section className="page-preview container" aria-labelledby="home-paths-title">
        <div className="preview-intro">
          <p className="section-kicker">Explore Vinci.One</p>
          <h2 id="home-paths-title">From operating problem to working system.</h2>
          <p>Three concise paths into the capabilities, active products and practical process behind Vinci.One.</p>
        </div>

        <nav className="preview-list" aria-label="Explore Vinci.One">
          <Link className="preview-row" to="/what-we-build">
            <span className="preview-index">01</span>
            <span className="preview-copy"><strong>What We Build</strong><span>Practical systems for businesses that have outgrown disconnected spreadsheets, repetitive processes and fragmented reporting.</span></span>
            <span className="preview-arrow" aria-hidden="true">↗</span>
          </Link>

          <Link className="preview-row" to="/products">
            <span className="preview-index">02</span>
            <span className="preview-copy"><strong>Systems already being built</strong><span>Active business systems in development for HR, operations and reporting that are grounded in real business work.</span></span>
            <span className="preview-arrow" aria-hidden="true">↗</span>
          </Link>

          <Link className="preview-row" to="/approach">
            <span className="preview-index">03</span>
            <span className="preview-copy"><strong>How Vinci.One works</strong><span>A practical, operation-first process that keeps systems useful and focused on actual business needs.</span></span>
            <span className="preview-arrow" aria-hidden="true">↗</span>
          </Link>
        </nav>
      </section>
    </div>
  )
}
