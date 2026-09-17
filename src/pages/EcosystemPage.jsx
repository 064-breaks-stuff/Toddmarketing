import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SystemGrid from '../components/brand/SystemGrid';
import PageRail from '../components/ui/PageRail';
import Button from '../components/ui/Button';
import { CONTACT_PATH, systemStages } from '../app/siteConfig';

export default function EcosystemPage() {
  return (
    <>
      <section className="ecosystem-hero">
        <SystemGrid />

        <div className="container ecosystem-hero__inner">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">The Todd Marketing Growth System</p>

          <h1>
            Growth is not a campaign.
            <span> It is a connected operating model.</span>
          </h1>

          <p>
            Each stage is designed to make the next one stronger—from the first
            signal of demand to the visibility needed to improve it.
          </p>
        </div>

          <div className="ecosystem-blueprint" aria-label="Five-stage growth system map">
            <div className="ecosystem-blueprint__input">
              <span>Demand sources</span>
              <small>Search / Social / Local</small>
            </div>

            <div className="ecosystem-blueprint__path" aria-hidden="true" />

            {systemStages.map((stage) => (
              <div className="ecosystem-blueprint__stage" key={stage.number}>
                <span>{stage.number}</span>
                <strong>{stage.title}</strong>
                <small>{stage.shortLabel}</small>
              </div>
            ))}

            <div className="ecosystem-blueprint__output">
              <span>Revenue visibility</span>
              <small>Clearer next decisions</small>
            </div>
          </div>
      </section>

      <section className="ecosystem-map-section">
        <div className="container">
          <div className="ecosystem-map-section__intro">
            <p className="section-label">Five connected stages</p>
            <h2 className="section-title">
              The right work depends on where momentum is being lost.
            </h2>
          </div>

          <div className="ecosystem-stages">
            {systemStages.map((stage, index) => (
              <article className="ecosystem-stage" key={stage.number}>
                <div className="ecosystem-stage__top">
                  <span className="ecosystem-stage__number">
                    {stage.number}
                  </span>

                  <span className="ecosystem-stage__line" aria-hidden="true" />
                </div>

                <div className="ecosystem-stage__content">
                  <p className="ecosystem-stage__kicker">
                    {stage.shortLabel}
                  </p>

                  <h2>{stage.title}</h2>

                  <p>{stage.detail}</p>

                  <div className="ecosystem-stage__detail">
                    <span>{index === 0 && 'Google Ads / Meta Ads / LSAs'}</span>
                    <span>{index === 1 && 'Websites / Landing Pages / Offers'}</span>
                    <span>{index === 2 && 'CRM / Routing / Booking'}</span>
                    <span>{index === 3 && 'Nurture / Automation / Reactivation'}</span>
                    <span>{index === 4 && 'Attribution / Reporting / Iteration'}</span>
                  </div>
                </div>

                <div className="ecosystem-stage__visual" aria-hidden="true">
                  <div className={`ecosystem-stage__arch ecosystem-stage__arch--${index + 1}`} />
                  <span>{stage.number}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecosystem-entry-section">
        <div className="container ecosystem-entry-section__inner">
          <div>
            <p className="section-label">Start where it matters</p>
            <h2>Not every business needs every layer on day one.</h2>
          </div>

          <div>
            <p>
              The Growth Systems Audit identifies the point where your current
              process is leaking attention, time, context, or opportunity. From
              there, the system can be strengthened in the right order.
            </p>

            <Button to={CONTACT_PATH}>Book a Growth Systems Audit</Button>
          </div>
        </div>
      </section>

      <section className="ecosystem-explore-section">
        <div className="container">
          <p className="section-label">Continue through the system</p>

          <div className="ecosystem-explore-section__links">
            <Link to="/">
              <span>01</span>
              <strong>Return Home</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>

            <Link to={CONTACT_PATH}>
              <span>02</span>
              <strong>Book a Growth Systems Audit</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Todd Marketing Home', to: '/' }}
          next={{ label: 'Book a Growth Systems Audit', to: CONTACT_PATH }}
        />
      </div>
    </>
  );
}