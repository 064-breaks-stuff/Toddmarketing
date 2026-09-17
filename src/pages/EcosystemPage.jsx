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

          <div
            className="growth-system-map"
            role="img"
            aria-label="Growth system map showing Google Ads, Meta Ads, and Local Services Ads feeding websites and landing pages, then CRM, automation, and booked opportunities."
          >
            <div className="growth-system-map__header" aria-hidden="true">
              <span>System map / Demand to opportunity</span>
              <span>Florida + Nationwide</span>
            </div>

            <div className="growth-system-map__canvas">
              <div className="growth-system-map__sources">
                <div className="growth-system-map__source">
                  <span className="growth-system-map__source-id">01</span>
                  <div>
                    <strong>Google Ads</strong>
                    <small>High-intent search</small>
                  </div>
                </div>

                <div className="growth-system-map__source">
                  <span className="growth-system-map__source-id">02</span>
                  <div>
                    <strong>Meta Ads</strong>
                    <small>Demand generation</small>
                  </div>
                </div>

                <div className="growth-system-map__source">
                  <span className="growth-system-map__source-id">03</span>
                  <div>
                    <strong>Local Services Ads</strong>
                    <small>Local lead flow</small>
                  </div>
                </div>
              </div>

              <div className="growth-system-map__merge" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="growth-system-map__main-flow">
                <article className="growth-system-map__module growth-system-map__module--page">
                  <span>04</span>
                  <div className="growth-system-map__module-icon growth-system-map__module-icon--page">
                    <i />
                    <i />
                    <i />
                  </div>
                  <strong>Website / Landing Page</strong>
                  <small>Clarify the offer and capture intent</small>
                </article>

                <div className="growth-system-map__arrow" aria-hidden="true">
                  <span />
                </div>

                <article className="growth-system-map__module growth-system-map__module--crm">
                  <span>05</span>
                  <div className="growth-system-map__module-icon growth-system-map__module-icon--crm">
                    <i />
                    <i />
                  </div>
                  <strong>CRM Intelligence</strong>
                  <small>Route, qualify, and assign the lead</small>
                </article>

                <div className="growth-system-map__arrow" aria-hidden="true">
                  <span />
                </div>

                <article className="growth-system-map__module growth-system-map__module--automation">
                  <span>06</span>
                  <div className="growth-system-map__module-icon growth-system-map__module-icon--automation">
                    <i />
                    <i />
                    <i />
                  </div>
                  <strong>Automation</strong>
                  <small>Follow up while context stays intact</small>
                </article>

                <div className="growth-system-map__arrow" aria-hidden="true">
                  <span />
                </div>

                <article className="growth-system-map__outcome">
                  <span>07</span>
                  <div className="growth-system-map__outcome-mark">
                    <svg viewBox="0 0 48 48" aria-hidden="true">
                      <rect x="8" y="10" width="32" height="29" rx="2" />
                      <path d="M8 18h32M16 7v7M32 7v7M17 28l4 4 10-10" />
                    </svg>
                  </div>
                  <strong>Booked Opportunity</strong>
                  <small>Sales team receives a visible next step</small>
                </article>
              </div>
            </div>

            <div className="growth-system-map__footer" aria-hidden="true">
              <span>Input / Qualified attention</span>
              <span>Output / Revenue-ready opportunity</span>
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