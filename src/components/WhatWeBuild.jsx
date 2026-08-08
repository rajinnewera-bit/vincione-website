import React from 'react'

const SERVICES = [
  {
    title: 'Custom Business Applications',
    desc: 'Purpose-built applications for real operational workflows, approvals, tracking, reporting and internal controls.',
    examples: ['HR and attendance systems','Quotation management','Operational workflow apps','Field employee systems','Internal business tools']
  },
  {
    title: 'Business Process Automation',
    desc: 'Reduce repetitive work and manual follow-ups by turning recurring tasks into structured workflows.',
    examples: ['Approvals','Reminders','Data movement','Automated reporting','Process controls']
  },
  {
    title: 'MIS & Business Intelligence',
    desc: 'Turn operating data into useful management information rather than static reports.',
    examples: ['Management dashboards','Drill-down analysis','Operational KPIs','Exception reporting','Decision support']
  },
  {
    title: 'Excel & Google Sheets Automation',
    desc: 'Strengthen spreadsheet workflows before a full application is necessary.',
    examples: ['Automated reports','Formulas and controls','Apps Script workflows','Data consolidation','Approval systems']
  },
  {
    title: 'Financial & Operational Reporting',
    desc: 'Structured reporting systems for finance, operations and management visibility.',
    examples: ['Reconciliation','Profitability','Branch reporting','Variance analysis','Ageing']
  },
  {
    title: 'Intelligent Business Systems',
    desc: 'Software that helps interpret and analyse business data intelligently to support decisions.',
    examples: ['Adaptive analysis','KPI generation','Drill-down reporting','Decision support']
  }
]

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="page-section container">
      <header className="page-header what-we-build-header">
        <p className="section-kicker">Capabilities</p>
        <h1>What We Build</h1>
        <p className="page-lead">Practical systems for businesses that have outgrown disconnected spreadsheets, repetitive processes and fragmented reporting.</p>
      </header>

      <div className="capability-intro">
        <p>Each engagement begins with the operation: where information moves, where decisions slow down and where manual work prevents a clear view of the business.</p>
        <p className="capability-note">The result is software shaped around the work—not a generic platform imposed on it.</p>
      </div>

      <div className="capability-list">
        {SERVICES.map((s, index) => (
          <article className="capability-row" key={s.title}>
            <div className="capability-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="capability-title"><h2>{s.title}</h2></div>
            <div className="capability-detail">
              <p>{s.desc}</p>
              <ul>
              {s.examples.map((e,i)=> <li key={i}>{e}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
