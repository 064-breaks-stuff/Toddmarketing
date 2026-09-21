import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

const services = [
  {
    number: '01',
    title: 'Conversion Architecture',
    description:
      'Websites, landing pages, offers, and conversion paths that give serious buyers a clear next step.',
    to: '/services/websites-funnels'
  },
  {
    number: '02',
    title: 'Demand Generation',
    description:
      'Google Ads, Meta Ads, and Local Services Ads aligned to intent, offer clarity, and downstream lead quality.',
    to: '/services/advertising'
  },
  {
    number: '03',
    title: 'Revenue Operations',
    description:
      'CRM intelligence, GoHighLevel, n8n workflows, routing, follow-up, booking, and visibility systems.',
    to: '/services/crm-automation'
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="interior-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / Services</p>

          <h1>
            Three practices.
            <span> One connected growth system.</span>
          </h1>

          <p>
            Each service can solve an immediate business problem. Together, they
            create the infrastructure that keeps opportunity moving.
          </p>
        </div>
      </section>

      <section className="services-index">
        <div className="container">
          <p className="section-label">Choose your starting point</p>

          <div className="services-index__list">
            {services.map((service) => (
              <Link className="services-index__item" key={service.to} to={service.to}>
                <span className="services-index__number">{service.number}</span>

                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>

                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="interior-cta-section">
        <div className="container">
          <h2>Start with the layer that matters most right now.</h2>

          <Button to={CONTACT_PATH}>
            Book a Growth Systems Audit
          </Button>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Explore the Growth System', to: '/ecosystem' }}
          next={{ label: 'Review the Process', to: '/process' }}
        />
      </div>
    </>
  );
}