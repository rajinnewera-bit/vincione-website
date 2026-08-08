import React from 'react'

export default function ProductCard({ title, label, desc, bullets = [], status, featured = false, index }) {
  return (
    <article className={`product-card${featured ? ' featured' : ''}`} aria-labelledby={`p-${title.replace(/\s+/g, '-')}`}>
      <div className="product-identity">
        <div className="product-index">{index}</div>
        <div className="card-head">
          <div className="card-label">{label}</div>
          <h2 className="card-title" id={`p-${title.replace(/\s+/g, '-')}`}>{title}</h2>
        </div>
      </div>

      <div className="product-summary">
        <p className="product-field-label">System purpose</p>
        <p className="card-desc">{desc}</p>
      </div>

      {bullets && bullets.length > 0 && (
        <div className="product-capabilities">
          <p className="product-field-label">Functional scope</p>
          <ul className="card-bullets">
            {bullets.map((b, i) => <li key={i}><span>{String(i + 1).padStart(2, '0')}</span>{b}</li>)}
          </ul>
        </div>
      )}

      <div className="product-state">
        <span className="status-dot" aria-hidden="true" />
        <span className="product-field-label">Development status</span>
        <strong>{status}</strong>
      </div>
    </article>
  )
}
