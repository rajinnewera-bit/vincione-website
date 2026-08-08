import React from 'react'

export default function Visual() {
  return (
    <div className="visual-interface" aria-hidden="true">
      <div className="visual-top">
        <span className="visual-pill">Data View</span>
        <span className="visual-pill">Operational Metrics</span>
      </div>

      <div className="visual-panel">
        <div className="panel-title">Business data summary</div>
        <div className="panel-stat">72%</div>
        <div className="panel-meta">Higher visibility across operations, finance and reporting flows.</div>
        <div className="panel-list">
          <div className="panel-item">Approval delay monitoring</div>
          <div className="panel-item">Process completion score</div>
          <div className="panel-item">Report readiness index</div>
        </div>
      </div>

      <div className="visual-panel">
        <div className="panel-title">Live operational view</div>
        <div className="panel-list">
          <div className="panel-item">Recent workflows: 18</div>
          <div className="panel-item">Open approvals: 6</div>
          <div className="panel-item">Data refresh: 7m ago</div>
        </div>
        <div className="panel-meta">A structured interface for decision-making without visual clutter.</div>
      </div>
    </div>
  )
}
