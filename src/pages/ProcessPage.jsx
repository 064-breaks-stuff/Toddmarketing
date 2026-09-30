import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Route,
  Workflow,
  Wrench
} from 'lucide-react';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

const steps = [
  {
    number: '01',
    title: 'Assess',
    label: 'Find the system gap',
    summary:
      'Review how people find you, what happens when they arrive, and where handoffs create friction.',
    detail:
      'We start with the operating reality: local visibility, demand sources, conversion paths, lead capture, response ownership, and reporting context. The goal is to identify the gaps that deserve attention before more activity is added.',
    deliverables: [
      'Visibility and demand review',
      'Conversion and handoff audit',
      'Priority gap assessment'
    ],
    visual: 'assess'
  },
  {
    number: '02',
    title: 'Prioritize',
    label: 'Choose the next best move',
    summary:
      'Organize the gaps by leverage, dependency, and practicality so the work has a clear order.',
    detail:
      'Not every improvement should happen at once. We map opportunities by the value they can unlock and the work they depend on, then define the clearest next move for the current system.',
    deliverables: [
      'Opportunity map',
      'Dependency-aware sequence',
      'Focused growth plan'
    ],
    visual: 'prioritize'
  },
  {
    number: '03',
    title: 'Build',
    label: 'Connect the working parts',
    summary:
      'Implement the agreed visibility, conversion, CRM, automation, and reporting layers as one connected system.',
    detail:
      'Build work is shaped by the approved plan. It can include Google Business Profile work, landing paths, Google Ads or Local Services Ads foundations, GoHighLevel configuration, lead routing, follow-up logic, and measurement structures.',
    deliverables: [
      'Connected implementation plan',
      'Conversion and follow-up layers',
      'Practical quality controls'
    ],
    visual: 'build'
  },
  {
    number: '04',
    title: 'Launch',
    label: 'Verify every handoff',
    summary:
      'Check that traffic, conversion actions, CRM capture, notifications, and booking paths connect correctly.',
    detail:
      'Launch readiness is about confirming the handoffs, not claiming a result before one exists. We review whether sources are tracked, forms and calls are routed, notifications reach the right owner, and the intended customer path behaves as planned.',
    deliverables: [
      'Launch QA checklist',
      'Tracking and routing checks',
      'Readiness review'
    ],
    visual: 'launch'
  },
  {
    number: '05',
    title: 'Optimize',
    label: 'Improve with context',
    summary:
      'Use lead quality, booking, review, and revenue context to decide what should improve next.',
    detail:
      'Optimization is a structured review rather than random adjustment. The system is revisited across visibility, offer, capture, follow-up, reputation, and reporting so the next decision strengthens the connected whole.',
    deliverables: [
      'Operational signal review',
      'Bottleneck prioritization',
      'Next-step improvement plan'
    ],
    visual: 'optimize'
  }
];

function StageVisual({ type }) {
  if (type === 'assess') {
    return (
      <div
        className="process-visual process-visual--assess"
        aria-label="System audit board showing visibility, demand, conversion, follow-up, and reporting checks"
        role="img"
      >
        <div className="process-visual__header">
          <span>System audit board</span>
          <span>Review scope</span>
        </div>

        <div className="audit-board">
          {[
            ['01', 'Visibility', CircleDot],
            ['02', 'Demand', Route],
            ['03', 'Conversion', Check],
            ['04', 'Follow-up', Workflow],
            ['05', 'Reporting', Wrench]
          ].map(([number, label, Icon]) => (
            <div className="audit-board__row" key={label}>
              <span>{number}</span>
              <strong>{label}</strong>
              <i aria-hidden="true" />
              <Icon aria-hidden="true" size={15} strokeWidth={1.6} />
            </div>
          ))}
        </div>

        <div className="process-visual__footnote">
          <span>Signal review</span>
          <span>Handoff context</span>
        </div>
      </div>
    );
  }

  if (type === 'prioritize') {
    return (
      <div
        className="process-visual process-visual--prioritize"
        aria-label="Leverage matrix showing effort and impact categories with a next best move path"
        role="img"
      >
        <div className="process-visual__header">
          <span>Leverage matrix</span>
          <span>Decision framing</span>
        </div>

        <div className="leverage-matrix">
          <span className="leverage-matrix__axis leverage-matrix__axis--vertical">
            Impact
          </span>
          <span className="leverage-matrix__axis leverage-matrix__axis--horizontal">
            Effort
          </span>

          <div className="leverage-matrix__grid" aria-hidden="true">
            <div>
              <small>High impact</small>
              <strong>Next best move</strong>
              <i />
            </div>
            <div>
              <small>High impact</small>
              <strong>Planned build</strong>
            </div>
            <div>
              <small>Lower impact</small>
              <strong>Quick support</strong>
            </div>
            <div>
              <small>Lower impact</small>
              <strong>Defer or simplify</strong>
            </div>
          </div>

          <div className="leverage-matrix__path" aria-hidden="true">
            <span />
            <i />
          </div>
        </div>

        <div className="process-visual__footnote">
          <span>Dependencies considered</span>
          <span>No fabricated scoring</span>
        </div>
      </div>
    );
  }

  if (type === 'build') {
    return (
      <div
        className="process-visual process-visual--build"
        aria-label="Implementation board showing Google Business Profile, landing page, Google Ads and Local Services Ads, GoHighLevel, and automation connected in a delivery system"
        role="img"
      >
        <div className="process-visual__header">
          <span>Implementation board</span>
          <span>Connected layers</span>
        </div>

        <div className="implementation-board">
          <div className="implementation-board__line implementation-board__line--one" />
          <div className="implementation-board__line implementation-board__line--two" />
          <div className="implementation-board__line implementation-board__line--three" />

          <div className="implementation-board__card implementation-board__card--gbp">
            <span>01</span>
            <strong>GBP</strong>
            <small>Local visibility</small>
          </div>

          <div className="implementation-board__card implementation-board__card--landing">
            <span>02</span>
            <strong>Landing page</strong>
            <small>Conversion path</small>
          </div>

          <div className="implementation-board__card implementation-board__card--ads">
            <span>03</span>
            <strong>Google Ads / LSA</strong>
            <small>Demand source</small>
          </div>

          <div className="implementation-board__card implementation-board__card--ghl">
            <span>04</span>
            <strong>GoHighLevel</strong>
            <small>Lead ownership</small>
          </div>

          <div className="implementation-board__card implementation-board__card--automation">
            <span>05</span>
            <strong>Automation</strong>
            <small>Follow-up logic</small>
          </div>
        </div>

        <div className="process-visual__footnote">
          <span>Dependencies, not timelines</span>
          <span>Quality controls</span>
        </div>
      </div>
    );
  }

  if (type === 'launch') {
    return (
      <div
        className="process-visual process-visual--launch"
        aria-label="Launch handoff check showing a sequence from traffic source to action, CRM, notification, and booking outcome"
        role="img"
      >
        <div className="process-visual__header">
          <span>Live handoff check</span>
          <span>Launch readiness</span>
        </div>

        <div className="handoff-check">
          {[
            ['Traffic source', '01'],
            ['Visitor action', '02'],
            ['CRM capture', '03'],
            ['Notification', '04'],
            ['Booking / outcome', '05']
          ].map(([label, number], index) => (
            <div className="handoff-check__step" key={label}>
              <span>{number}</span>
              <strong>{label}</strong>
              <i aria-hidden="true">
                <Check size={12} strokeWidth={2.2} />
              </i>
              {index < 4 && <b aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="process-visual__footnote">
          <span>Checks indicate review</span>
          <span>Not claimed outcomes</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="process-visual process-visual--optimize"
      aria-label="Improvement loop showing lead quality, bookings, reviews, and revenue context informing visibility, offer, follow-up, and reporting decisions"
      role="img"
    >
      <div className="process-visual__header">
        <span>Improvement loop</span>
        <span>Decision context</span>
      </div>

      <div className="improvement-loop">
        <div className="improvement-loop__ring improvement-loop__ring--outer" />
        <div className="improvement-loop__ring improvement-loop__ring--inner" />

        <div className="improvement-loop__center">
          <span>Review</span>
          <strong>Context</strong>
        </div>

        <div className="improvement-loop__signal improvement-loop__signal--quality">
          <span>01</span>
          <strong>Lead quality</strong>
        </div>

        <div className="improvement-loop__signal improvement-loop__signal--booking">
          <span>02</span>
          <strong>Booking</strong>
        </div>

        <div className="improvement-loop__signal improvement-loop__signal--reviews">
          <span>03</span>
          <strong>Reviews</strong>
        </div>

        <div className="improvement-loop__signal improvement-loop__signal--revenue">
          <span>04</span>
          <strong>Revenue context</strong>
        </div>

        <div className="improvement-loop__action improvement-loop__action--visibility">
          Visibility
        </div>
        <div className="improvement-loop__action improvement-loop__action--offer">
          Offer
        </div>
        <div className="improvement-loop__action improvement-loop__action--follow-up">
          Follow-up
        </div>
        <div className="improvement-loop__action improvement-loop__action--reporting">
          Reporting
        </div>
      </div>

      <div className="process-visual__footnote">
        <span>Improve the system</span>
        <span>No simulated dashboard</span>
      </div>
    </div>
  );
}

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const stepperId = useId();

  const activeStage = steps[activeStep];
  const activePanelId = `${stepperId}-panel-${activeStage.number}`;
  const detailId = `${stepperId}-detail-${activeStage.number}`;

  const selectStep = (index) => {
    setActiveStep(index);
    setIsDetailOpen(false);
  };

  const selectNextStep = () => {
    if (activeStep < steps.length - 1) {
      selectStep(activeStep + 1);
    }
  };

  const selectPreviousStep = () => {
    if (activeStep > 0) {
      selectStep(activeStep - 1);
    }
  };

  const handleStepKeyDown = (event, index) => {
    let nextIndex = index;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % steps.length;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + steps.length) % steps.length;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = steps.length - 1;
    }

    if (nextIndex !== index) {
      event.preventDefault();
      selectStep(nextIndex);
      document
        .getElementById(`${stepperId}-tab-${steps[nextIndex].number}`)
        ?.focus();
    }
  };

  return (
    <>
      <section className="interior-hero interior-hero--process">
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
            A practical five-stage process for identifying the right work,
            connecting the system, and making better next decisions.
          </p>
        </div>
      </section>

      <section className="process-stepper-section">
        <div className="container">
          <div className="process-stepper-section__intro">
            <p className="section-label">The delivery model</p>

            <h2 className="section-title">
              One clear stage at a time.
            </h2>

            <p className="section-copy">
              The process keeps the conversation grounded in what needs
              attention now, what needs to connect next, and what should be
              reviewed before moving forward.
            </p>
          </div>

          <div className="process-stepper">
            <div className="process-stepper__overview">
              <p>
                <span>{String(activeStep + 1).padStart(2, '0')}</span>
                of {String(steps.length).padStart(2, '0')} stages
              </p>

              <div
                className="process-stepper__progress"
                aria-hidden="true"
                style={{
                  '--process-progress': `${((activeStep + 1) / steps.length) * 100}%`
                }}
              >
                <i />
              </div>
            </div>

            <div
              className="process-stepper__tabs"
              aria-label="Process stages"
              role="tablist"
            >
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const tabId = `${stepperId}-tab-${step.number}`;
                const panelId = `${stepperId}-panel-${step.number}`;

                return (
                  <button
                    className={`process-stepper__tab ${
                      isActive ? 'is-active' : ''
                    }`}
                    key={step.number}
                    type="button"
                    id={tabId}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    aria-selected={isActive}
                    aria-controls={panelId}
                    onClick={() => selectStep(index)}
                    onKeyDown={(event) => handleStepKeyDown(event, index)}
                  >
                    <span>{step.number}</span>
                    <strong>{step.title}</strong>
                  </button>
                );
              })}
            </div>

            <div className="process-stepper__mobile-stages">
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    className={`process-stepper__mobile-stage ${
                      isActive ? 'is-active' : ''
                    }`}
                    key={step.number}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => selectStep(index)}
                  >
                    <span>{step.number}</span>
                    <strong>{step.title}</strong>
                    <small>{step.label}</small>
                    <i aria-hidden="true">
                      {isActive ? (
                        <ChevronUp size={18} strokeWidth={1.8} />
                      ) : (
                        <ChevronDown size={18} strokeWidth={1.8} />
                      )}
                    </i>
                  </button>
                );
              })}
            </div>

            <article
              className="process-stepper__stage"
              id={activePanelId}
              role="tabpanel"
              aria-labelledby={`${stepperId}-tab-${activeStage.number}`}
            >
              <div className="process-stepper__stage-copy">
                <p className="process-stepper__stage-label">
                  {activeStage.number} / {activeStage.label}
                </p>

                <h3>{activeStage.title}</h3>

                <p className="process-stepper__summary">
                  {activeStage.summary}
                </p>

                <ul className="process-stepper__deliverables">
                  {activeStage.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>

                <button
                  className={`process-stepper__detail-toggle ${
                    isDetailOpen ? 'is-open' : ''
                  }`}
                  type="button"
                  aria-expanded={isDetailOpen}
                  aria-controls={detailId}
                  onClick={() => setIsDetailOpen((isOpen) => !isOpen)}
                >
                  <span>See what happens here</span>
                  {isDetailOpen ? (
                    <ChevronUp size={18} strokeWidth={1.8} aria-hidden="true" />
                  ) : (
                    <ChevronDown
                      size={18}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {isDetailOpen && (
                  <div
                    className="process-stepper__detail"
                    id={detailId}
                    role="region"
                    aria-label={`${activeStage.title} stage detail`}
                  >
                    <p>{activeStage.detail}</p>
                  </div>
                )}
              </div>

              <StageVisual type={activeStage.visual} />
            </article>

            <div className="process-stepper__controls">
              <button
                className="process-stepper__control"
                type="button"
                onClick={selectPreviousStep}
                disabled={activeStep === 0}
              >
                <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>Previous stage</span>
              </button>

              <p aria-live="polite">
                Viewing <strong>{activeStage.title}</strong>
              </p>

              <button
                className="process-stepper__control process-stepper__control--next"
                type="button"
                onClick={selectNextStep}
                disabled={activeStep === steps.length - 1}
              >
                <span>Next stage</span>
                <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
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
          next={{
            label: 'Review Results Methodology',
            to: '/results'
          }}
        />
      </div>
    </>
  );
}