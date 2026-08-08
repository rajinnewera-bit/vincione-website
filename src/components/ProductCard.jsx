import React from 'react'

export default function ProductCard({ title, label, desc, bullets = [], status }) {
  return (
    <article className="product-card" aria-labelledby={`p-${title.replace(/\s+/g, '-')}`}>
      <div className="card-head">
        <div className="card-title" id={`p-${title.replace(/\s+/g, '-')}`}>{title}</div>
        <div className="card-label">{label}</div>
      </div>
      <p className="card-desc">{desc}</p>

      {bullets && bullets.length > 0 && (
        <ul className="card-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      <div className="card-footer">
        <div className="status">{status}</div>
      </div>
    </article>
  )
}
