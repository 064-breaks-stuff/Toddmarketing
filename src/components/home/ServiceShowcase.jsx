import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

function ConversionVisual() {
  return (
    <div className="service-visual service-visual--conversion" aria-hidden="true">
      <div className="service-visual__page">
        <span className="service-visual__page-topline" />
        <span className="service-visual__page-heading" />
        <span className="service-visual__page-copy" />
        <span className="service-visual__page-copy service-visual__page-copy--short" />
        <span className="service-visual__page-cta" />
      </div>

      <div className="service-visual__form">
        <span />
        <span />
        <span />
        <i />
      </div>

      <div className="service-visual__lead-dot" />
      <div className="service-visual__conversion-path" />
    </div>
  );
}

function DemandVisual() {
  return (
    <div className="service-visual service-visual--demand" aria-hidden="true">
      <div className="service-visual__demand-source service-visual__demand-source--one">
        <span>Google</span>
      </div>

      <div className="service-visual__demand-source service-visual__demand-source--two">
        <span>Meta</span>
      </div>

      <div className="service-visual__demand-source service-visual__demand-source--three">
        <span>LSA</span>
      </div>

      <div className="service-visual__intent-field">
        <span />
        <span />
        <span />
        <strong>Qualified intent</strong>
      </div>

      <div className="service-visual__demand-route service-visual__demand-route--one" />
      <div className="service-visual__demand-route service-visual__demand-route--two" />
      <div className="service-visual__demand-route service-visual__demand-route--three" />
    </div>
  );
}

function OperationsVisual() {
  return (
    <div className="service-visual service-visual--operations" aria-hidden="true">
      <div className="service-visual__workflow-node service-visual__workflow-node--lead">
        <span>Lead</span>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--crm">
        <span>CRM</span>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--route">
        <span>Route</span>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--followup">
        <span>Follow-up</span>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--booking">
        <span>Booked</span>
      </div>

      <div className="service-visual__workflow-line service-visual__workflow-line--one" />
      <div className="service-visual__workflow-line service-visual__workflow-line--two" />
      <div className="service-visual__workflow-line service-visual__workflow-line--three" />
      <div className="service-visual__workflow-line service-visual__workflow-line--four" />
    </div>
  );
}

const visuals = {
  conversion: ConversionVisual,
  demand: DemandVisual,
  operations: OperationsVisual
};

export default function ServiceShowcase({
  index,
  eyebrow,
  title,
  copy,
  capabilities,
  visual,
  to = '/contact',
  linkLabel = 'Book a Growth Systems Audit'
}) {
  const Visual = visuals[visual];

  return (
    <section className={`service-showcase service-showcase--${visual}`}>
      <div className="container service-showcase__inner">
        <div className="service-showcase__meta">
          <span>{index}</span>
          <p>{eyebrow}</p>
        </div>

        <div className="service-showcase__content">
          <h2>{title}</h2>

          <p className="service-showcase__copy">{copy}</p>

          <ul className="service-showcase__capabilities">
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>

          <Link className="service-showcase__link" to={to}>
            <span>{linkLabel}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <Visual />
      </div>
    </section>
  );
}