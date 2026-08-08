import React from 'react'
import ProductCard from './ProductCard'

const PRODUCTS = [
  {
    title: 'Vinci.One',
    label: 'Flagship Project / In Development',
    desc: 'An intelligent business analysis platform designed to inspect uploaded business data, understand its structure and generate relevant management insight while being actively developed.',
    bullets: ['Intelligent dataset understanding','Adaptive analysis','KPI generation','Drill-down reporting','Management decision support'],
    status: 'In development'
  },
  {
    title: 'HROP Version 1',
    label: 'HR & Operations System',
    desc: 'A practical HR and operations platform for employee records, attendance, field workforce management and organisational workflows.',
    bullets: ['Employee management','Attendance','Field attendance','Operational controls','HR reporting'],
    status: 'Active development'
  },
  {
    title: 'HR Analytics & Attendance',
    label: 'Business Application',
    desc: 'Attendance and HR analytics system converting daily attendance into operational and payroll information.',
    bullets: ['Attendance tracking','Paid weekly-off logic','Half-day handling','Compensatory-off logic','HR analytics'],
    status: 'MVP'
  },
  {
    title: 'Quotation Management',
    label: 'Business Application',
    desc: 'Structured quotation workflow to replace fragmented manual preparation and improve consistency and tracking.',
    bullets: ['Template management','Approval flow','Versioning','Tracking'],
    status: 'Prototype'
  },
  {
    title: 'Field Tracking',
    label: 'Operational Application / MVP',
    desc: 'Location-based workforce tracking for employees working outside the office with start/stop and location capture.',
    bullets: ['Start / stop work','Location capture','Field movement visibility','Activity tracking'],
    status: 'Pilot'
  }
]

export default function Products() {
  return (
    <section id="products" className="page-section products container">
      <header className="page-header products-header">
        <p className="section-kicker">Product portfolio</p>
        <h1>Systems Already Being Built</h1>
        <p className="page-lead">Vinci.One is being developed through real applications built around practical business problems.</p>
      </header>

      <div className="flagship-label">
        <span>Flagship system</span>
        <span>Intelligent business analysis</span>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((p, index) => <ProductCard key={p.title} {...p} index={String(index + 1).padStart(2, '0')} featured={index === 0} />)}

        <div className="other-systems">
          <p className="section-kicker">Extended work</p>
          <h2>Other operational systems and automations</h2>
          <p>Salary advance / loan approval workflows, referral partner CRM, GST reconciliation concepts, catalogue systems, reporting automation, Google Workspace automation, process and SOP systems.</p>
        </div>
      </div>
    </section>
  )
}
