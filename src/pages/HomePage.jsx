import { Link } from 'react-router-dom';
import GrowthFlow from '../components/brand/GrowthFlow';
import SystemGrid from '../components/brand/SystemGrid';
import Button from '../components/ui/Button';
import SystemAccordion from '../components/home/SystemAccordion';
import ServiceShowcase from '../components/home/ServiceShowcase';
import { CONTACT_PATH, systemStages } from '../app/siteConfig';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <SystemGrid />

        <div className="hero__vignette" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              Todd Marketing / Growth Infrastructure
            </p>

            <h1>
              The systems behind growth
              <span> should be built to hold.</span>
            </h1>

            <p className="hero__lead">
              Todd Marketing connects demand generation, conversion
              architecture, CRM intelligence, and automation—so opportunity
              keeps moving after the click.
            </p>

            <div className="hero__actions">
              <Button to={CONTACT_PATH}>Book a Growth Systems Audit</Button>

              <Link className="hero__text-link" to="/ecosystem">
                Explore the Growth System
                <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          <GrowthFlow />
        </div>

        <div className="container hero__rail" aria-label="Growth system stages">
          {systemStages.map((stage) => (
            <span key={stage.number}>
              {stage.number} / {stage.title}
            </span>
          ))}
        </div>
      </section>

      <section className="friction-section">
        <div className="container">
          <p className="section-label">The friction</p>

          <div className="friction-section__heading">
            <h2 className="section-title">
              Most businesses do not have a lead problem.
              <span> They have a handoff problem.</span>
            </h2>

            <p className="section-copy">
              Growth slows when marketing, websites, sales operations, and
              follow-up systems are owned separately. Todd Marketing designs
              the connective infrastructure between them.
            </p>
          </div>

          <div className="friction-grid">
            <article>
              <span>01</span>
              <h3>Traffic without a conversion path.</h3>
              <p>
                Spend creates attention, but unclear offers and weak next steps
                leave valuable intent behind.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Leads without a response system.</h3>
              <p>
                An inquiry does not become an opportunity until it reaches the
                right person with the right context at the right time.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Data without operational visibility.</h3>
              <p>
                When systems do not connect, the team cannot see what created,
                progressed, or stalled the opportunity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="system-section">
        <SystemGrid />

        <div className="container system-section__content">
          <p className="section-label">The operating system</p>

          <div className="system-section__intro">
            <h2 className="section-title">
              Every stage should strengthen the next.
            </h2>

            <p className="section-copy">
              Start with the pressure point that matters most. Build toward an
              integrated growth system when the business is ready.
            </p>
          </div>

          <SystemAccordion stages={systemStages} />

          <Link className="system-section__link" to="/ecosystem">
            Enter the full Growth System
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="services-intro-section">
        <div className="container">
          <p className="section-label">Three practices</p>

          <div className="services-intro-section__heading">
            <h2 className="section-title">
              Build the layer that creates the next opportunity.
            </h2>

            <p className="section-copy">
              Start with the immediate constraint. Connect the wider system
              when the business is ready to make every handoff stronger.
            </p>
          </div>
        </div>
      </section>

      <ServiceShowcase
        index="01"
        eyebrow="Conversion architecture"
        title="Make every serious visit easier to act on."
        copy="Websites and funnels should do more than look credible. They should clarify the offer, reduce hesitation, and move qualified demand into a measurable next step."
        capabilities={[
          'Website and landing-page architecture',
          'Offer, messaging, and CTA hierarchy',
          'Form, calendar, CRM, and tracking handoff'
        ]}
        visual="conversion"
      />

      <ServiceShowcase
        index="02"
        eyebrow="Demand generation"
        title="Create demand around intent—not noise."
        copy="Paid acquisition works best when channel strategy, offer clarity, landing experiences, and sales feedback are designed as one connected system."
        capabilities={[
          'Google Ads and high-intent search capture',
          'Meta acquisition and remarketing systems',
          'Local Services Ads and local lead flow'
        ]}
        visual="demand"
      />

      <ServiceShowcase
        index="03"
        eyebrow="Revenue operations"
        title="Keep opportunity moving after it arrives."
        copy="CRM architecture and automation create the structure behind faster routing, cleaner follow-up, better booking processes, and more useful revenue visibility."
        capabilities={[
          'GoHighLevel or existing CRM architecture',
          'n8n orchestration and data movement',
          'Routing, follow-up, booking, and reactivation'
        ]}
        visual="operations"
      />

      <section className="accountability-section">
        <div className="accountability-section__arch" aria-hidden="true" />

        <div className="container accountability-section__inner">
          <p className="section-label">Founder-led by design</p>

          <h2>Strategy should not disappear after the sale.</h2>

          <div className="accountability-section__body">
            <p>
              Todd Marketing is built around direct involvement, clear
              communication, and senior ownership from system design through
              implementation.
            </p>

            <Button to={CONTACT_PATH}>Book a Growth Systems Audit</Button>
          </div>
        </div>
      </section>
    </>
  );
}