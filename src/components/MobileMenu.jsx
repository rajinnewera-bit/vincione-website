import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileMenu({ open, onClose, links = [] }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    <div id="mobile-navigation" className={"mobile-menu" + (open ? ' open' : '')} role="dialog" aria-modal="true" aria-label="Mobile navigation" aria-hidden={!open}>
      <div className="mobile-inner container">
        <div className="mobile-menu-head">
          <div className="brand">VINCI<span className="brand-dot">.</span>ONE</div>
          <button ref={closeButtonRef} className="close" type="button" onClick={onClose} aria-label="Close menu" autoFocus={open}>×</button>
        </div>
        <nav className="mobile-nav">
          {links.map(([label, href]) => (
            <NavLink key={label} to={href} onClick={onClose}>{label}</NavLink>
          ))}
        </nav>
        <div className="mobile-actions">
          <NavLink className="btn primary" to="/contact" onClick={onClose}>Discuss a Business Problem</NavLink>
        </div>
      </div>
    </div>
  )
}
