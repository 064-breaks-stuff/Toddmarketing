import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Conversion Architecture.',
    description:
      'Websites and funnels that give serious buyers a clear next step.',
    items: [
      'Website and landing-page architecture',
      'Offer, messaging, and CTA hierarchy',
      'Forms, calendars, CRM, and tracking handoff'
    ],
    href: '/services/websites-funnels',
    type: 'conversion'
  },
  {
    number: '02',
    title: 'Demand Generation.',
    description:
      'Paid demand built around intent—not activity for activity’s sake.',
    items: [
      'Google Ads and search-intent capture',
      'Meta acquisition and remarketing',
      'Local Services Ads and local lead flow'
    ],
    href: '/services/advertising',
    type: 'demand'
  },
  {
    number: '03',
    title: 'Revenue Operations.',
    description:
      'CRM and automation that keep opportunity moving after it arrives.',
    items: [
      'GoHighLevel or existing CRM systems',
      'n8n orchestration and data movement',
      'Routing, follow-up, booking, and visibility'
    ],
    href: '/services/crm-automation',
    type: 'operations'
  }
];

function ConversionVisual() {
  return (
    <div className="service-showcase__visual service-showcase__visual--conversion">
      <div className="service-showcase__browser">
        <div className="service-showcase__browser-top">
          <span />
          <span />
          <span />
        </div>

        <div className="service-showcase__browser-title" />
        <div className="service-showcase__browser-copy" />
        <div className="service-showcase__browser-cta" />
        <div className="service-showcase__browser-form" />
      </div>
    </div>
  );
}

function DemandVisual() {
  return (
    <div className="service-showcase__visual service-showcase__visual--demand">
      <div className="service-showcase__constellation">
        <div className="service-showcase__source-node service-showcase__source-node--one">
          Google
        </div>

        <div className="service-showcase__source-node service-showcase__source-node--two">
          Meta
        </div>

        <div className="service-showcase__source-node service-showcase__source-node--three">
          LSA
        </div>

        <div className="service-showcase__intent-core">
          Qualified
          <br />
          Demand
        </div>

        <span className="service-showcase__intent-line service-showcase__intent-line--one" />
        <span className="service-showcase__intent-line service-showcase__intent-line--two" />
        <span className="service-showcase__intent-line service-showcase__intent-line--three" />
        <span className="service-showcase__intent-pulse" />
      </div>
    </div>
  );
}

function OperationsVisual() {
  return (
    <div className="service-showcase__visual service-showcase__visual--operations">
      <div className="service-showcase__workflow">
        <div className="service-showcase__workflow-node service-showcase__workflow-node--lead">
          Lead
        </div>

        <div className="service-showcase__workflow-node service-showcase__workflow-node--crm">
          CRM
        </div>

        <div className="service-showcase__workflow-node service-showcase__workflow-node--followup">
          Follow-Up
        </div>

        <div className="service-showcase__workflow-node service-showcase__workflow-node--booking">
          Booked
        </div>

        <span className="service-showcase__workflow-line service-showcase__workflow-line--one" />
        <span className="service-showcase__workflow-line service-showcase__workflow-line--two" />
        <span className="service-showcase__workflow-line service-showcase__workflow-line--three" />
      </div>
    </div>
  );
}

function ServiceVisual({ type }) {
  if (type === 'conversion') return <ConversionVisual />;
  if (type === 'demand') return <DemandVisual />;
  return <OperationsVisual />;
}

export default function ServiceShowcase() {
  return (
    <section className="service-showcase">
      {services.map((service) => (
        <article
          className={`service-showcase__feature service-showcase__feature--${service.type}`}
          key={service.number}
        >
          <div className="container">
            <div className="service-showcase__content">
              <span className="service-showcase__number">
                {service.number}
              </span>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <ul className="service-showcase__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link className="service-showcase__link" to={service.href}>
                Explore {service.title.replace('.', '')}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <ServiceVisual type={service.type} />
          </div>
        </article>
      ))}
    </section>
  );
}