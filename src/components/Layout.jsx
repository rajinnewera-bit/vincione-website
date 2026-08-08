import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className="site-root">
      <Nav />
      {children}
      <footer className="site-footer footer-extended">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">VINCI<span className="brand-dot">.</span>ONE</div>
            <div className="tag">Business Applications • Automation • Intelligence</div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/what-we-build">What We Build</Link>
            <Link to="/products">Products</Link>
            <Link to="/approach">Approach</Link>
            <Link to="/founder">Founder</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="footer-contact">
            <a href="mailto:rajinnnewera@gmail.com">rajinnnewera@gmail.com</a>
            <a href="https://www.linkedin.com/in/rajdeep-dutta-59ba36394/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <div>© 2026 Vinci.One. All rights reserved.</div>
          <div className="small">Built around real business problems.</div>
        </div>
      </footer>
    </div>
  )
}
