import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu({ open, onClose, links = [] }) {
  return (
    <div className={"mobile-menu" + (open ? ' open' : '')} role="dialog" aria-hidden={!open}>
      <div className="mobile-inner container">
        <button className="close" onClick={onClose} aria-label="Close menu">×</button>
        <nav className="mobile-nav">
          {links.map(([label, href]) => (
            <Link key={label} to={href} onClick={onClose}>{label}</Link>
          ))}
        </nav>
        <div className="mobile-actions">
          <Link className="cta primary" to="/what-we-build" onClick={onClose}>Explore What We Build</Link>
          <Link className="cta secondary" to="/contact" onClick={onClose}>Discuss a Business Problem</Link>
        </div>
      </div>
    </div>
  )
}
