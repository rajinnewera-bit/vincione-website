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
    title: 'HROP',
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
    <section id="products" className="section products container">
      <div className="section-head">
        <div>
          <h2>Systems Already Being Built</h2>
          <p className="muted">Vinci.One is being developed through real applications built around practical business problems.</p>
        </div>
      </div>

      <div className="products-grid">
        {PRODUCTS.map(p => <ProductCard key={p.title} {...p} />)}

        <div className="other-systems">
          <h3>Other operational systems and automations</h3>
          <p className="muted">Salary advance / loan approval workflows, referral partner CRM, GST reconciliation concepts, catalogue systems, reporting automation, Google Workspace automation, process and SOP systems.</p>
        </div>
      </div>
    </section>
  )
}
