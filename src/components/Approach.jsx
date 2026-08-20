import React from 'react'

const STEPS = [
  {num: '01', title: 'Understand the Operation', desc: 'Observe how the work actually happens: people, approvals, delays, reports, dependencies and exceptions.'},
  {num: '02', title: 'Find the Real Problem', desc: 'Separate the visible symptom from the underlying process problem.'},
  {num: '03', title: 'Structure the Process', desc: 'Define information flow, responsibilities, controls and decision points before building.'},
  {num: '04', title: 'Build the Smallest Useful System', desc: 'Solve the real problem first instead of creating unnecessary complexity.'},
  {num: '05', title: 'Measure and Improve', desc: 'Use actual operating behaviour and data to improve the system.'}
]

export default function Approach() {
  return (
    <section id="approach" className="page-section approach container">
      <header className="page-header approach-header">
        <p className="section-kicker">Operating method</p>
        <h1>How Vinci.One Approaches a Business Problem</h1>
        <p className="page-lead">A business does not need software merely because software exists. Start with the operation.</p>
      </header>

      <div className="process-flow">
        {STEPS.map(step => (
          <article className="process-step" key={step.num}>
            <div className="process-marker">{step.num}</div>
            <div className="process-content">
              <h3>{step.title}</h3>
              <p className="muted">{step.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="approach-statement">
        <span>Operating principle</span>
        <div className="approach-statement-copy">
          <strong>The best business system is one that progressively needs less of your attention.</strong>
          <p>It should understand the routine, handle what it can, surface what it cannot, and bring people in where judgement begins.</p>
        </div>
      </div>
    </section>
  )
}
