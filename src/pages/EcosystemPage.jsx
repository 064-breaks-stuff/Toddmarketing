import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SystemGrid from '../components/brand/SystemGrid';
import PageRail from '../components/ui/PageRail';
import Button from '../components/ui/Button';
import { CONTACT_PATH, systemStages } from '../app/siteConfig';

const systemLayers = [
  {
    number: '01',
    title: 'Visibility & Demand',
    detail:
      'Google Search, Google Business Profile, and Local Services Ads create qualified local attention where buyers are already looking.',
    label: 'Google Ads / GBP / LSAs'
  },
  {
    number: '02',
    title: 'Conversion',
    detail:
      'Website paths, service landing pages, offers, calls, forms, and booking actions make the next step clear once attention arrives.',
    label: 'Website / Landing Pages / Calls / Forms'
  },
  {
    number: '03',
    title: 'Follow-Up',
    detail:
      'GoHighLevel captures source context, assigns ownership, activates the right response, and keeps the pipeline visible.',
    label: 'CRM / Routing / Booking / Automation'
  },
  {
    number: '04',
    title: 'Reputation',
    detail:
      'Review requests, nurture, reactivation, and customer continuity help a completed job become future demand and trust.',
    label: 'Reviews / Nurture / Reactivation'
  },
  {
    number: '05',
    title: 'Reporting',
    detail:
      'Outcome signals return upstream so acquisition, conversion, operations, and the next growth decision improve with context.',
    label: 'Attribution / Reporting / Iteration'
  }
];

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
            We can solve a single gap. But businesses that want sustainable
            growth are best served by a connected system built across
            visibility, demand, conversion, follow-up, reputation, and
            reporting.
          </p>
        </div>

        <div
          className="growth-system-map"
          role="img"
          aria-label="Connected local growth map showing visibility and demand feeding conversion, follow-up, reputation, and reporting."
        >
          <div className="growth-system-map__header" aria-hidden="true">
            <span>System map / Local growth loop</span>
            <span>Wisconsin + Nationwide</span>
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
                  <strong>Google Business Profile</strong>
                  <small>Local discovery</small>
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
                <strong>Conversion Path</strong>
                <small>Website, landing page, offer, call, form, or booking</small>
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
                <strong>GoHighLevel Follow-Up</strong>
                <small>Route, qualify, assign, and respond with context</small>
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
                <strong>Reputation Loop</strong>
                <small>Review requests, nurture, and reactivation</small>
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
                <strong>Visible Growth</strong>
                <small>Booked opportunity, customer outcome, and reporting signal</small>
              </article>
            </div>
          </div>

          <div className="growth-system-map__footer" aria-hidden="true">
            <span>Input / Qualified local attention</span>
            <span>Output / Connected growth signal</span>
          </div>
        </div>
      </section>

      <section className="ecosystem-map-section">
        <div className="container">
          <div className="ecosystem-map-section__intro">
            <p className="section-label">Five connected layers</p>
            <h2 className="section-title">
              The right work depends on where momentum is being lost.
            </h2>
          </div>

          <div className="ecosystem-stages">
            {systemLayers.map((layer, index) => (
              <article className="ecosystem-stage" key={layer.number}>
                <div className="ecosystem-stage__top">
                  <span className="ecosystem-stage__number">
                    {layer.number}
                  </span>

                  <span className="ecosystem-stage__line" aria-hidden="true" />
                </div>

                <div className="ecosystem-stage__content">
                  <p className="ecosystem-stage__kicker">
                    {systemStages[index]?.shortLabel}
                  </p>

                  <h2>{layer.title}</h2>

                  <p>{layer.detail}</p>

                  <div className="ecosystem-stage__detail">
                    <span>{layer.label}</span>
                  </div>
                </div>

                <div className="ecosystem-stage__visual" aria-hidden="true">
                  <div className={`ecosystem-stage__arch ecosystem-stage__arch--${index + 1}`} />
                  <span>{layer.number}</span>
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
            <h2>Begin with the constraint. Build toward the connected system.</h2>
          </div>

          <div>
            <p>
              The Growth Infrastructure Audit identifies the point where your
              current system is losing attention, time, context, reputation, or
              opportunity. From there, we can solve the immediate gap and map
              the connected system that supports sustainable growth.
            </p>

            <Button to={CONTACT_PATH}>Plan My Local Growth System</Button>
          </div>
        </div>
      </section>

      <section className="ecosystem-explore-section">
        <div className="container">
          <p className="section-label">Continue through the system</p>

          <div className="ecosystem-explore-section__links">
            <Link to="/services">
              <span>01</span>
              <strong>See What’s Missing in Your Lead Flow</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>

            <Link to={CONTACT_PATH}>
              <span>02</span>
              <strong>Plan Your Local Growth System</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Todd Marketing Home', to: '/' }}
          next={{ label: 'Plan Your Local Growth System', to: CONTACT_PATH }}
        />
      </div>
    </>
  );
}