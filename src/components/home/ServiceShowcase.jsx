import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

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
          GBP
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

export default function ServiceShowcase({
  index,
  eyebrow,
  title,
  copy,
  capabilities,
  visual
}) {
  return (
    <section
      className={`service-showcase__feature service-showcase__feature--${visual}`}
    >
      <div className="container">
        <div className="service-showcase__content">
          <span className="service-showcase__number">{index}</span>

          <p className="service-showcase__eyebrow">{eyebrow}</p>

          <h2>{title}</h2>

          <p>{copy}</p>

          <ul className="service-showcase__list">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link className="service-showcase__link" to="/services">
            Explore the connected system
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <ServiceVisual type={visual} />
      </div>
    </section>
  );
}