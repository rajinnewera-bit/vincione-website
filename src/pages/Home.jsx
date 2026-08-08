import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      <section className="section page-preview container">
        <div className="section-head">
          <div>
            <h2>What Vinci.One does</h2>
            <p className="muted">Three concise paths that describe the product focus, systems, and process behind Vinci.One.</p>
          </div>
        </div>

        <div className="preview-grid">
          <article className="preview-panel">
            <h3>What We Build</h3>
            <p className="muted">Practical systems for businesses that have outgrown disconnected spreadsheets, repetitive processes and fragmented reporting.</p>
            <Link className="preview-link" to="/what-we-build">Explore What We Build</Link>
          </article>

          <article className="preview-panel">
            <h3>Systems already being built</h3>
            <p className="muted">Active business systems in development for HR, operations and reporting that are grounded in real business work.</p>
            <Link className="preview-link" to="/products">View Products</Link>
          </article>

          <article className="preview-panel">
            <h3>How Vinci.One works</h3>
            <p className="muted">A practical, operation-first process that keeps systems useful and focused on actual business needs.</p>
            <Link className="preview-link" to="/approach">See the approach</Link>
          </article>
        </div>
      </section>
    </div>
  )
}
