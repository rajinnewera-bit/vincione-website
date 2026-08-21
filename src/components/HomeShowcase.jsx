import { Link } from 'react-router-dom'

export default function HomeShowcase() {
  return (
    <section className="cinematic-hero container" aria-labelledby="cinematic-hero-title">
      <div className="cinematic-hero-copy">
        <p className="eyebrow">BUSINESS SYSTEMS • AUTOMATION • INTELLIGENCE</p>
        <div className="cinematic-hero-proposition">
          <h1 id="cinematic-hero-title">Business systems that turn operations into intelligence.</h1>
          <div className="cinematic-hero-support">
            <p>Vinci.One builds practical applications, automation and decision-support systems around how organisations actually work.</p>
            <div className="cinematic-hero-actions">
              <Link className="btn primary" to="/what-we-build">Explore What We Build</Link>
              <Link className="text-link" to="/contact">Discuss a Business Problem <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="cinematic-hero-media">
        <video
          className="cinematic-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/Showcase/vinci-one-showcase-poster.jpg"
          aria-label="Vinci.One cinematic showcase of business applications, analytics and operational intelligence"
        >
          <source src="/Showcase/vinci-one-showcase.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    </section>
  )
}
