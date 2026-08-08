import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const LINKS = [
  ['Home', '/'],
  ['What We Build', '/what-we-build'],
  ['Products', '/products'],
  ['Approach', '/approach'],
  ['Founder', '/founder'],
  ['Contact', '/contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-root">
      <div className="nav-inner container">
        <div className="brand">VINCI<span className="brand-dot">.</span>ONE</div>

        <nav className="nav-links" aria-label="Primary navigation">
          {LINKS.map(([label, href]) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <NavLink className="cta secondary" to="/contact">Discuss a Business Problem</NavLink>
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={LINKS} />
    </header>
  )
}
