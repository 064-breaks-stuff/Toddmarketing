import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import PageRail from '../ui/PageRail';
import ServiceVisual from './ServiceVisual';
import { CONTACT_PATH } from '../../app/siteConfig';

const serviceLinks = [
  {
    label: 'Demand Capture',
    to: '/services#demand-capture',
    key: 'conversion'
  },
  {
    label: 'Demand Generation',
    to: '/services#demand-generation',
    key: 'advertising'
  },
  {
    label: 'CRM & Automation',
    to: '/services#crm-automation',
    key: 'automation'
  }
];

export default function ServicePageTemplate({
  category,
  title,
  description,
  type,
  visualType = type,
  problems,
  deliverables,
  bestFit,
  mechanism,
  mechanismTitle,
  mechanismCopy,
  previous,
  next
}) {
  const relatedServices = serviceLinks.filter((service) => service.key !== type);

  return (
    <>
      <section className={`service-detail-hero service-detail-hero--${type}`}>
        <div className="container">
          <Link className="back-link back-link--light" to="/services">
            <span aria-hidden="true">←</span>
            Return to Services
          </Link>

          <div className="service-detail-hero__layout">
            <div className="service-detail-hero__copy">
              <p className="hero__eyebrow">{category}</p>

              <h1>{title}</h1>

              <p>{description}</p>

              <div className="service-detail-hero__actions">
                <Button to={CONTACT_PATH}>
                  Book a Growth Infrastructure Audit
                </Button>

                <Link
                  className="service-detail-hero__services-link"
                  to="/services"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  View all services
                </Link>
              </div>
            </div>

            <ServiceVisual type={visualType} />
          </div>
        </div>
      </section>

      <section className="service-detail-problem">
        <div className="container">
          <div className="service-detail-problem__intro">
            <p className="section-label">Where this helps</p>

            <h2 className="section-title">
              Stronger growth systems begin by removing the friction that slows
              the next step.
            </h2>
          </div>

          <div className="service-detail-problem__grid">
            {problems.map((problem, index) => (
              <article key={problem.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{problem.title}</h3>
                <p>{problem.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-build">
        <div className="container">
          <div className="service-detail-build__intro">
            <p className="section-label">What we build</p>

            <h2>
              The work is designed to connect with the rest of your growth
              system—not sit beside it.
            </h2>
          </div>

          <div className="service-detail-build__list">
            {deliverables.map((deliverable, index) => (
              <article key={deliverable.title}>
                <span className="service-detail-build__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3>{deliverable.title}</h3>
                  <p>{deliverable.copy}</p>
                </div>

                <Check size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`service-detail-mechanism service-detail-mechanism--${type}`}
      >
        <div className="container">
          <div className="service-detail-mechanism__layout">
            <div>
              <p className="section-label">The mechanism</p>

              <h2>{mechanismTitle}</h2>

              <p>{mechanismCopy}</p>
            </div>

            <div className="service-detail-mechanism__diagram">
              {mechanism.map((step, index) => (
                <div
                  className="service-detail-mechanism__step"
                  key={step.label}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step.label}</strong>
                  <small>{step.detail}</small>

                  {index < mechanism.length - 1 && (
                    <ChevronRight
                      className="service-detail-mechanism__arrow"
                      size={18}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-fit">
        <div className="container">
          <div className="service-detail-fit__layout">
            <div>
              <p className="section-label">Best fit when</p>

              <h2>
                You need one part of the system to start performing like it
                belongs to the whole.
              </h2>
            </div>

            <ul>
              {bestFit.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-detail-related">
        <div className="container">
          <div className="service-detail-related__heading">
            <p className="section-label">Services-first discovery</p>

            <Link
              className="service-detail-related__all-link"
              to="/services"
            >
              View all services
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="service-detail-related__links">
            {relatedServices.map((service) => (
              <Link key={service.to} to={service.to}>
                <span>{service.label}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <div>
            <p className="section-label">Start with the right layer</p>

            <h2>
              Find the point where your current system is losing momentum.
            </h2>
          </div>

          <Button to={CONTACT_PATH}>
            Book a Growth Infrastructure Audit
          </Button>
        </div>
      </section>

      <div className="container">
        <PageRail previous={previous} next={next} />
      </div>
    </>
  );
}