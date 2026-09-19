import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    tag: 'Audit',
    copy: 'Review demand sources, conversion paths, CRM structure, and the operational handoffs that shape outcomes.'
  },
  {
    number: '02',
    title: 'Map',
    tag: 'Journey map',
    copy: 'Define the journey from first touch to opportunity, including ownership, information flow, and technology dependencies.'
  },
  {
    number: '03',
    title: 'Define',
    tag: 'Scope',
    copy: 'Set a clear scope, sequence, milestones, deliverables, and the conditions needed for launch.'
  },
  {
    number: '04',
    title: 'Build',
    tag: 'Implementation',
    copy: 'Implement the agreed conversion, demand, CRM, and automation systems with practical quality controls.'
  },
  {
    number: '05',
    title: 'Launch',
    tag: 'QA',
    copy: 'Run checks across tracking, forms, booking, routing, communications, and live campaign readiness.'
  },
  {
    number: '06',
    title: 'Optimize',
    tag: 'Iteration',
    copy: 'Use operational signals to identify bottlenecks and prioritize the next improvements.'
  }
];

export default function ProcessPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionId = useId();

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

      <section className="process-accordion-section">
        <div className="container">
          <div className="process-accordion-section__intro">
            <p className="section-label">The delivery model</p>

            <h2>
              Six deliberate stages.
              <span> One accountable path forward.</span>
            </h2>
          </div>

          <div className="process-accordion">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const triggerId = `${accordionId}-trigger-${index}`;
              const panelId = `${accordionId}-panel-${index}`;

              return (
                <article
                  className={`process-accordion__item ${
                    isActive ? 'is-active' : ''
                  }`}
                  key={step.number}
                >
                  <button
                    className="process-accordion__trigger"
                    type="button"
                    id={triggerId}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                  >
                    <span className="process-accordion__number">
                      {step.number}
                    </span>

                    <span className="process-accordion__title">
                      {step.title}
                    </span>

                    <span className="process-accordion__tag">
                      {step.tag}
                    </span>

                    <span className="process-accordion__icon" aria-hidden="true">
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  <div
                    className="process-accordion__panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isActive}
                  >
                    <p>{step.copy}</p>

                    <div className="process-accordion__panel-rule" />

                    <span>
                      Stage {step.number} / {step.tag}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
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