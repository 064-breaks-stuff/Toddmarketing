import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

const steps = [
  ['01', 'Diagnose', 'Review demand sources, conversion paths, CRM structure, and the operational handoffs that shape outcomes.'],
  ['02', 'Map', 'Define the journey from first touch to opportunity, including ownership, information flow, and technology dependencies.'],
  ['03', 'Define', 'Set a clear scope, sequence, milestones, deliverables, and the conditions needed for launch.'],
  ['04', 'Build', 'Implement the agreed conversion, demand, CRM, and automation systems with practical quality controls.'],
  ['05', 'Launch', 'Run checks across tracking, forms, booking, routing, communications, and live campaign readiness.'],
  ['06', 'Optimize', 'Use operational signals to identify bottlenecks and prioritize the next improvements.']
];

export default function ProcessPage() {
  return (
    <>
      <section className="interior-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / Process</p>

          <h1>
            Clear systems begin
            <span> with clear decisions.</span>
          </h1>

          <p>
            The process is designed to make scope, ownership, implementation,
            and next steps easier to understand at every stage.
          </p>
        </div>
      </section>

      <section className="interior-list-section">
        <div className="container interior-list">
          {steps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interior-cta-section">
        <div className="container">
          <h2>Start by identifying the handoff that needs attention first.</h2>
          <Button to={CONTACT_PATH}>Book a Growth Systems Audit</Button>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Explore Services', to: '/services' }}
          next={{ label: 'Review Results Methodology', to: '/results' }}
        />
      </div>
    </>
  );
}