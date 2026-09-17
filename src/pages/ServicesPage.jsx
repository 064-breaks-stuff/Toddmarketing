import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

const practices = [
  {
    number: '01',
    title: 'Conversion architecture',
    copy: 'Websites, landing pages, offer systems, and conversion paths designed to move qualified attention into clear next steps.'
  },
  {
    number: '02',
    title: 'Demand generation',
    copy: 'Google Ads, Meta Ads, and Local Services Ads aligned to real intent, offer clarity, and conversion readiness.'
  },
  {
    number: '03',
    title: 'Revenue operations',
    copy: 'CRM intelligence, GoHighLevel, n8n automation, lead routing, follow-up, and visibility systems built around the opportunity lifecycle.'
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
            Each practice can solve an immediate business problem. Together,
            they create the infrastructure that keeps opportunity moving.
          </p>
        </div>
      </section>

      <section className="interior-list-section">
        <div className="container interior-list">
          {practices.map((practice) => (
            <article key={practice.number}>
              <span>{practice.number}</span>
              <h2>{practice.title}</h2>
              <p>{practice.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interior-cta-section">
        <div className="container">
          <h2>Start with the layer that matters most right now.</h2>
          <Button to={CONTACT_PATH}>Book a Growth Systems Audit</Button>
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