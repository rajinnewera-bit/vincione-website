import React from 'react'

export default function Founder() {
  return (
    <section id="founder" className="page-section founder container">
      <header className="page-header founder-header">
        <p className="section-kicker">Founder</p>
        <h1>Rajdeep Dutta</h1>
        <p className="page-lead">Founder, Vinci.One</p>
      </header>

      <article className="founder-manifesto">
        <h2>Human intelligence should be spent on judgement, not repetitive work.</h2>

        <div className="founder-manifesto-copy">
          <div className="founder-origin">
            <p>I did not begin with the idea of building software. I began by noticing how much human time and effort businesses spend on work that should not require a human in the first place.</p>
            <p>People spend hours moving information between systems, checking records, reconciling data, preparing reports, following repetitive processes and correcting the same operational gaps again and again. Technology has made many of these tasks faster, but making manual work faster is not always the answer.</p>
            <p className="founder-emphasis">Sometimes the work itself should no longer need to be done manually.</p>
            <p className="founder-bridge">That is the idea behind Vinci.One.</p>
          </div>

          <div className="founder-purpose">
            <p>I am building systems intelligent enough to understand routine operational work, perform what can be performed reliably by a system, recognise what needs attention, and leave the decisions that genuinely require judgement to people.</p>
            <p>The objective is not to remove humans from business. It is to make better use of what makes us human: our ability to understand context, question what does not make sense, deal with ambiguity, exercise judgement and decide what should happen next.</p>
            <p className="founder-thesis">The goal is not to replace people with machines. It is to stop using people like machines.</p>
          </div>
        </div>
      </article>

      <section className="founder-editorial-section founder-operating">
        <header>
          <p className="section-kicker">Operating philosophy</p>
          <h2>Make the system do the work</h2>
        </header>

        <div className="founder-section-copy">
          <p>A useful business system should do more than store information, display dashboards or give people another interface to operate. It should remove unnecessary work.</p>
          <p>If a process can be understood, structured and performed reliably by a system, people should not have to keep performing it manually.</p>
          <p>The system should organise, calculate, reconcile, monitor, check and surface what matters. As these systems become more intelligent, they should increasingly be capable of handling routine work with less human intervention.</p>
          <p className="founder-emphasis">But judgement stays with people.</p>
          <p className="founder-thesis">Machines should carry the workload. Humans should carry the judgement.</p>
        </div>
      </section>

      <section className="founder-editorial-section founder-background">
        <h2 className="section-kicker">Background</h2>

        <div className="founder-section-copy">
          <p>Vinci.One comes from practical experience with the everyday realities of finance, accounts, operations, HR, MIS, reporting and internal controls.</p>
          <p>Working inside these functions exposed a recurring problem: organisations often have capable people spending substantial amounts of time compensating for fragmented processes, disconnected information and systems that still depend heavily on manual intervention.</p>
          <p>My background in business processes, finance and operational management — together with experience in automation, Excel, Google Workspace, MIS and commercial ERP environments — led me towards building systems around those gaps.</p>
          <p>That experience continues to shape Vinci.One: begin with the problem, understand how the work actually happens, and build only where technology can create meaningful value.</p>
        </div>
      </section>

      <section className="founder-editorial-section founder-direction">
        <h2>What Vinci.One is working towards</h2>

        <div className="founder-section-copy">
          <p>Vinci.One is not about adding AI to a process simply because the technology is available.</p>
          <p>The direction is to create business systems that require progressively less effort to operate: systems capable of understanding information, performing routine work, identifying exceptions and bringing the right information to a person when human judgement is actually required.</p>
          <p className="founder-emphasis">The measure of a good system is therefore not how sophisticated it appears.</p>
          <p>It is how much unnecessary effort it removes, how reliable it makes the work, and how much human time it gives back for something more valuable.</p>
        </div>
      </section>

      <footer className="founder-closing">
        <p className="section-kicker">Build systems that do the work.</p>
        <h2>Give people back<br />the time to think.</h2>
      </footer>
    </section>
  )
}
