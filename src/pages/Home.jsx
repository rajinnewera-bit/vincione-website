import { Link } from 'react-router-dom'
import { useState } from 'react'
import './home-redesign.css'

const scenes = [
  {name:'Finance',tag:'Reconciliation & control',inputs:['Purchase register','Supplier statements','Tax records'],outputs:['Matched transactions','Exceptions surfaced','Review-ready reports']},
  {name:'Operations',tag:'Connected workflows',inputs:['Field updates','Approval requests','Team activity'],outputs:['Clear ownership','Visible bottlenecks','Actionable status']},
  {name:'Intelligence',tag:'Decisions from data',inputs:['Disconnected sources','Manual reporting','Scattered metrics'],outputs:['Unified information','Useful dashboards','Faster decisions']}
]

export default function Home(){
 const [active,setActive]=useState(0)
 const scene=scenes[active]
 return <div className="v-home">
  <section className="v-hero container" aria-labelledby="v-hero-title">
   <div className="v-hero-content">
    <p className="v-kicker"><span className="v-status-dot"/> VINCI.ONE / BUSINESS SYSTEMS STUDIO</p>
    <h1 id="v-hero-title">Less friction.<br/><em>More clarity.</em></h1>
    <p className="v-hero-lead">We design business applications that connect the work, the data, and the decisions.</p>
    <div className="v-actions"><Link className="v-button" to="/what-we-build">Explore what we build <span aria-hidden="true">↗</span></Link><Link className="v-secondary-link" to="/contact">Discuss a project →</Link></div>
    <div className="v-hero-foot"><span>FINANCE</span><span>OPERATIONS</span><span>AUTOMATION</span><span>INTELLIGENCE</span></div>
   </div>
   <div className="v-hero-art" role="img" aria-label="Abstract visualization of connected business systems">
    <div className="v-orbit v-orbit-one"/><div className="v-orbit v-orbit-two"/><div className="v-orbit v-orbit-three"/>
    <div className="v-core"><div className="v-core-inner">V<span>.</span>ONE</div></div>
    <div className="v-floating-label v-label-a"><small>01 / INPUT</small><strong>Fragmented data</strong></div>
    <div className="v-floating-label v-label-b"><small>02 / PROCESS</small><strong>Connected systems</strong></div>
    <div className="v-floating-label v-label-c"><small>03 / OUTPUT</small><strong>Clear decisions</strong></div>
    <span className="v-art-note">Conceptual system visualization</span>
   </div>
  </section>
  <section className="v-lab container" aria-labelledby="v-lab-title">
   <div className="v-section-head"><div><p className="v-kicker">01 / SYSTEMS IN FOCUS</p><h2 id="v-lab-title">See the thinking<br/>behind the systems.</h2></div><p>Choose an area to explore how disconnected inputs can become structured, usable information.</p></div>
   <div className="v-lab-shell">
    <div className="v-tabs" role="group" aria-label="Select a business system">{scenes.map((s,i)=><button key={s.name} type="button" className={'v-tab'+(active===i?' is-active':'')} aria-pressed={active===i} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{s.name}</strong><small>{s.tag}</small><b aria-hidden="true">↗</b></button>)}</div>
    <div className="v-demo">
     <div className="v-demo-top"><span className="v-demo-light"/> SYSTEM FLOW / {scene.name.toUpperCase()} <span>CONCEPTUAL DEMONSTRATION</span></div>
     <div className="v-flow">
      <div className="v-flow-column"><p>DISCONNECTED INPUTS</p>{scene.inputs.map(x=><div className="v-flow-item" key={x}><span className="v-flow-square"/>{x}</div>)}</div>
      <div className="v-flow-center"><div className="v-flow-engine"><span>VINCI.ONE</span><strong>Connect.<br/>Structure.<br/>Automate.</strong></div><span className="v-flow-arrow">→</span></div>
      <div className="v-flow-column v-flow-output"><p>STRUCTURED OUTCOMES</p>{scene.outputs.map(x=><div className="v-flow-item" key={x}><span className="v-flow-check">✓</span>{x}</div>)}</div>
     </div>
     <p className="v-demo-disclaimer">Illustrative workflow, not a claim of live customer performance.</p>
    </div>
   </div>
  </section>
  <section className="v-showcase container" aria-labelledby="v-showcase-title">
   <div className="v-showcase-copy"><p className="v-kicker">02 / A CLOSER LOOK</p><h2 id="v-showcase-title">Built for the way work actually happens.</h2><p>Practical applications, workflow automation, and reporting tools designed around real operational problems.</p><Link className="v-secondary-link" to="/products">Explore products in development ↗</Link></div>
   <div className="v-showcase-media"><video controls muted playsInline preload="none" poster="/Showcase/vinci-one-showcase-poster.jpg" aria-label="Vinci.One visual showcase"><source src="/Showcase/vinci-one-showcase.mp4" type="video/mp4"/>Your browser does not support video.</video></div>
  </section>
  <section className="v-end container"><p className="v-kicker">03 / START A CONVERSATION</p><h2>Have a business problem<br/>worth solving?</h2><Link className="v-button" to="/contact">Let's talk <span aria-hidden="true">↗</span></Link></section>
 </div>
}
