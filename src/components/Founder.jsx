import React from 'react'

export default function Founder() {
  return (
    <section id="founder" className="section founder container">
      <div className="section-head">
        <div>
          <h2>Founder</h2>
          <p className="muted">Rajdeep Dutta — Founder, Vinci.One</p>
        </div>
      </div>

      <div className="founder-grid">
        <div className="founder-bio">
          <p className="lead">"I did not begin with the idea of starting a software company. I began with business problems that needed solving."</p>
          <p className="muted">Rajdeep brings a practical background in finance, accounts, HR, operations and management reporting. His hands-on experience with business processes and internal controls, along with tools such as Excel, Google Workspace automation, MIS and commercial ERP systems, led him to progressively build application solutions to recurring operational problems. Vinci.One grew from that experience and continues to develop applications grounded in operational reality.</p>
          <p className="muted small">The advantage is not knowing every technology. It is knowing why the system needs to exist.</p>
        </div>

        <aside className="founder-panel">
          <div className="panel-label">Founder perspective</div>
          <p className="panel-quote">I began with business problems that needed solving, not with the idea of starting a software company.</p>
          <p className="muted">Rajdeep’s experience covers finance, operations, HR, MIS, automation and process design. This grounding helps Vinci.One build systems that suit real operational workflows rather than elegant abstractions.</p>
          <div className="skills-grid">
            <span>Finance</span>
            <span>Operations</span>
            <span>MIS</span>
            <span>Automation</span>
            <span>Business Applications</span>
            <span>Process Design</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
