import React from 'react'

export default function Founder() {
  return (
    <section id="founder" className="page-section founder container">
      <header className="page-header founder-header">
        <p className="section-kicker">Founder</p>
        <h1>Rajdeep Dutta</h1>
        <p className="page-lead">Founder, Vinci.One</p>
      </header>

      <div className="founder-grid">
        <div className="founder-bio">
          <blockquote>I did not begin with the idea of starting a software company. I began with business problems that needed solving.</blockquote>
          <div className="founder-background">
            <p className="section-kicker">Background</p>
            <p>Rajdeep brings a practical background in finance, accounts, HR, operations and management reporting. His hands-on experience with business processes and internal controls, along with tools such as Excel, Google Workspace automation, MIS and commercial ERP systems, led him to progressively build application solutions to recurring operational problems. Vinci.One grew from that experience and continues to develop applications grounded in operational reality.</p>
          </div>
        </div>

        <aside className="founder-aside">
          <div className="founder-philosophy">
            <p className="section-kicker">Operating philosophy</p>
            <p>Rajdeep’s experience covers finance, operations, HR, MIS, automation and process design. This grounding helps Vinci.One build systems that suit real operational workflows rather than elegant abstractions.</p>
            <p className="method-discipline">The same thinking extends to how systems are built: define the problem clearly, measure what is actually happening, analyse the cause, improve the process and build controls that help the improvement hold. This discipline is informed by Six Sigma Green Belt training and DMAIC principles.</p>
            <strong>The advantage isn&apos;t starting with technology. It&apos;s understanding why the system needs to exist.</strong>
          </div>
          <div className="capability-areas">
            <p className="section-kicker">Capability areas</p>
          <div className="skills-grid">
            <span>Finance</span>
            <span>Operations</span>
            <span>MIS</span>
            <span>Automation</span>
            <span>Business Applications</span>
            <span>Process Design</span>
          </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
