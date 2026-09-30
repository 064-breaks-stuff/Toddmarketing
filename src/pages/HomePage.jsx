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
              Todd Marketing connects visibility, demand, conversion,
              follow-up, reputation, and reporting—so local growth does not
              stop at the click or disappear after the lead arrives.
            </p>

            <div className="hero__actions">
              <Button to={CONTACT_PATH}>Build My Growth System</Button>

              <Link className="hero__text-link" to="/ecosystem">
                See the connected system
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
              <span> They have a disconnected system problem.</span>
            </h2>

            <p className="section-copy">
              A business can be visible, generate leads, and still lose
              momentum when website conversion, follow-up, reputation, and
              reporting are owned separately.
            </p>
          </div>

          <div className="friction-grid">
            <article>
              <span>01</span>
              <h3>Visibility without a conversion path.</h3>
              <p>
                Search visibility and paid demand create attention, but unclear
                offers and weak next steps leave valuable intent behind.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Leads without connected follow-up.</h3>
              <p>
                An inquiry does not become an opportunity until it reaches the
                right person with the right context and a clear next action.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Growth without a feedback loop.</h3>
              <p>
                When outcomes, reviews, and reporting do not connect back to
                acquisition and operations, improvement becomes guesswork.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="system-section">
        <SystemGrid />

        <div className="container system-section__content">
          <p className="section-label">The connected operating system</p>

          <div className="system-section__intro">
            <h2 className="section-title">
              Every layer should make the next one stronger.
            </h2>

            <p className="section-copy">
              We can solve a single gap. But businesses that want sustainable
              growth are best served by a connected system built across
              visibility, demand, conversion, follow-up, reputation, and
              reporting.
            </p>
          </div>

          <SystemAccordion />

          <Link className="system-section__link" to="/ecosystem">
            Explore the complete growth system
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="services-intro-section">
        <div className="container">
          <p className="section-label">Three connected practices</p>

          <div className="services-intro-section__heading">
            <h2 className="section-title">
              Start with the constraint. Build toward the whole system.
            </h2>

            <p className="section-copy">
              Each practice can repair an urgent bottleneck. The strongest
              engagement connects them so local demand, conversion, follow-up,
              reputation, and reporting reinforce one another.
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
        eyebrow="Visibility and demand"
        title="Get found where local buyers are already looking."
        copy="Google Ads, Local Services Ads, Google Business Profile visibility, landing experiences, and sales feedback become more useful when they are connected to the same growth system."
        capabilities={[
          'Google Ads and high-intent search capture',
          'Google Business Profile visibility support',
          'Local Services Ads and local lead flow'
        ]}
        visual="demand"
      />

      <ServiceShowcase
        index="03"
        eyebrow="Follow-up and growth"
        title="Keep opportunity moving after it arrives."
        copy="GoHighLevel, automation, review requests, reactivation, and reporting create the operating layer that connects demand to customer outcomes."
        capabilities={[
          'GoHighLevel or existing CRM architecture',
          'Routing, follow-up, booking, and review requests',
          'Reactivation, reporting, and revenue visibility'
        ]}
        visual="operations"
      />

      <section className="integrated-growth-section">
        <div className="container integrated-growth-section__inner">
          <div>
            <p className="section-label">The preferred path</p>

            <h2>
              One connected system is stronger than a collection of isolated
              fixes.
            </h2>
          </div>

          <div className="integrated-growth-section__body">
            <p>
              We can solve a single gap. But businesses that want sustainable
              growth are best served by a connected system built across
              visibility, demand, conversion, follow-up, reputation, and
              reporting.
            </p>

            <div className="integrated-growth-section__layers">
              <span>Visibility</span>
              <span>Demand</span>
              <span>Conversion</span>
              <span>Follow-Up</span>
              <span>Reputation</span>
              <span>Reporting</span>
            </div>

            <Button to={CONTACT_PATH}>Plan My Local Growth System</Button>
          </div>
        </div>
      </section>

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

            <Button to={CONTACT_PATH}>Build My Growth System</Button>
          </div>
        </div>
      </section>
    </>
  );
}