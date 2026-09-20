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
    label: 'Find the system gap',
    summary:
      'Review demand sources, conversion paths, CRM structure, and the operational handoffs that shape outcomes.',
    detail:
      'We begin by identifying where the current system is creating friction. That can include disconnected traffic sources, unclear website pathways, weak response processes, CRM gaps, or reporting that does not reveal what happens after a lead arrives.',
    deliverables: [
      'Demand and conversion review',
      'CRM and follow-up audit',
      'Priority system-gap assessment'
    ]
  },
  {
    number: '02',
    title: 'Map',
    label: 'Define the journey',
    summary:
      'Define the journey from first touch to opportunity, including ownership, information flow, and technology dependencies.',
    detail:
      'The journey is mapped across the points that matter: where demand starts, what action a visitor takes, how the lead enters the CRM, who owns the next step, and how the business stays connected after the first interaction.',
    deliverables: [
      'Customer-journey map',
      'Ownership and handoff plan',
      'Platform dependency review'
    ]
  },
  {
    number: '03',
    title: 'Define',
    label: 'Set the delivery plan',
    summary:
      'Set a clear scope, sequence, milestones, deliverables, and the conditions needed for launch.',
    detail:
      'The implementation plan turns the system map into clear work. Scope, milestones, deliverables, and launch requirements are documented before build work begins so there is less ambiguity once execution is underway.',
    deliverables: [
      'Implementation scope',
      'Milestone sequence',
      'Launch-readiness requirements'
    ]
  },
  {
    number: '04',
    title: 'Build',
    label: 'Connect the system',
    summary:
      'Implement the agreed conversion, demand, CRM, and automation systems with practical quality controls.',
    detail:
      'Build work can include websites and landing paths, advertising foundations, CRM configuration, GoHighLevel planning, n8n workflows, lead routing, follow-up logic, booking journeys, and operational reporting structures.',
    deliverables: [
      'Conversion and demand assets',
      'CRM and automation setup',
      'Workflow quality controls'
    ]
  },
  {
    number: '05',
    title: 'Launch',
    label: 'Verify the handoffs',
    summary:
      'Run checks across tracking, forms, booking, routing, communications, and live campaign readiness.',
    detail:
      'Before a system goes live, the focus shifts to the handoffs: whether actions are tracked, forms route correctly, booking works, notifications reach the right people, and the new process behaves as intended under real conditions.',
    deliverables: [
      'Launch QA checklist',
      'Tracking and routing verification',
      'Live readiness review'
    ]
  },
  {
    number: '06',
    title: 'Optimize',
    label: 'Improve with context',
    summary:
      'Use operational signals to identify bottlenecks and prioritize the next improvements.',
    detail:
      'Optimization is not random adjustment. It is a structured review of what happened across demand, capture, conversion, retention, and measurement so the next decision improves the system rather than adding more disconnected activity.',
    deliverables: [
      'Performance review',
      'Bottleneck prioritization',
      'Next-step optimization plan'
    ]
  }
];

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);
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

            <h2 className="section-title">
              Six stages from system clarity to better next decisions.
            </h2>

            <p className="section-copy">
              Each stage gives the work a clear purpose: understand the system,
              define the handoffs, build the right layer, verify the launch, and
              improve with context.
            </p>
          </div>

          <div className="process-accordion">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const triggerId = `${accordionId}-trigger-${step.number}`;
              const panelId = `${accordionId}-panel-${step.number}`;

              return (
                <article
                  className={`process-accordion__item ${
                    isActive ? 'is-active' : ''
                  }`}
                  key={step.number}
                >
                  <button
                    type="button"
                    className="process-accordion__trigger"
                    onClick={() => setActiveStep(index)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    id={triggerId}
                  >
                    <span className="process-accordion__number">
                      {step.number}
                    </span>

                    <span className="process-accordion__title-group">
                      <strong>{step.title}</strong>
                      <small>{step.label}</small>
                    </span>

                    <span className="process-accordion__summary">
                      {step.summary}
                    </span>

                    <span
                      className="process-accordion__icon"
                      aria-hidden="true"
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  {isActive && (
                    <div
                      className="process-accordion__panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                    >
                      <div className="process-accordion__panel-copy">
                        <p>{step.detail}</p>

                        <ul className="process-accordion__deliverables">
                          {step.deliverables.map((deliverable) => (
                            <li key={deliverable}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className="process-accordion__stage-mark"
                        aria-hidden="true"
                      >
                        <span>{step.number}</span>
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="interior-cta-section">
        <div className="container">
          <h2>Start by identifying the handoff that needs attention first.</h2>

          <Button to={CONTACT_PATH}>
            Book a Growth Systems Audit
          </Button>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Explore Services', to: '/services' }}
          next={{
            label: 'Review Results Methodology',
            to: '/results'
          }}
        />
      </div>
    </>
  );
}