import React from 'react'

const ITEMS = [
  ['UNDERSTAND', 'the operation'],
  ['STRUCTURE', 'the process'],
  ['BUILD', 'the system'],
  ['MEASURE', 'the result'],
  ['IMPROVE', 'continuously'],
]

export default function PositionStrip() {
  return (
    <section className="position-strip">
      <div className="container strip-inner">
        <div className="strip-items">
          {ITEMS.map(([title, desc]) => (
            <div className="strip-item" key={title}>
              <div className="strip-title">{title}</div>
              <div className="strip-desc">{desc}</div>
            </div>
          ))}
        </div>

        <div className="strip-statement">
          <strong>Software should fit the operation — not the other way around.</strong>
        </div>
      </div>
    </section>
  )
}
