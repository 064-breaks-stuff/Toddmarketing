import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'Demand',
    label: 'Demand in',
    description:
      'Create qualified attention through search, paid social, and local-service channels aligned to real buying intent.',
    detail:
      'Demand generation begins by aligning the offer, market, service area, and channel with the moment a buyer is actively looking for help.',
    signals: ['Google Ads', 'Meta Ads', 'Local Services Ads'],
    visual: 'demand'
  },
  {
    number: '02',
    title: 'Capture',
    label: 'Intent captured',
    description:
      'Give that attention a clear next step through conversion architecture, landing experiences, and friction-light pathways.',
    detail:
      'The conversion path should make the offer obvious, establish trust quickly, and move visitors toward one useful action instead of multiple competing decisions.',
    signals: ['Landing pages', 'Offer clarity', 'Forms and calendars'],
    visual: 'capture'
  },
  {
    number: '03',
    title: 'Convert',
    label: 'Lead routed',
    description:
      'Route, qualify, and respond through CRM intelligence that preserves source, context, ownership, and urgency.',
    detail:
      'A lead becomes a usable opportunity only when the correct team member receives it quickly with the information needed to take the next step.',
    signals: ['CRM intelligence', 'Lead routing', 'Pipeline visibility'],
    visual: 'convert'
  },
  {
    number: '04',
    title: 'Retain',
    label: 'Follow-up active',
    description:
      'Keep opportunity moving through timely nurture, booking workflows, reactivation, and relationship continuity.',
    detail:
      'Follow-up should be consistent without becoming impersonal. Automation protects response time while the business keeps the right human moments in the journey.',
    signals: ['SMS and email', 'Booking workflows', 'Reactivation'],
    visual: 'retain'
  },
  {
    number: '05',
    title: 'Optimize',
    label: 'Revenue visible',
    description:
      'Return outcome signals upstream so budgets, offers, automation, and customer journeys improve with context.',
    detail:
      'The strongest next decision is informed by what happened after the click: which source created the opportunity, what progressed, and where momentum slowed.',
    signals: ['Attribution', 'Reporting', 'Iteration'],
    visual: 'optimize'
  }
];

function StageVisual({ type }) {
  return (
    <div
      className={`system-accordion__visual system-accordion__visual--${type}`}
      aria-hidden="true"
    >
      <span className="system-accordion__visual-grid" />

      <span className="system-accordion__visual-node system-accordion__visual-node--one" />
      <span className="system-accordion__visual-node system-accordion__visual-node--two" />
      <span className="system-accordion__visual-node system-accordion__visual-node--three" />

      <span className="system-accordion__visual-line system-accordion__visual-line--one" />
      <span className="system-accordion__visual-line system-accordion__visual-line--two" />

      <span className="system-accordion__visual-label">
        System signal active
      </span>
    </div>
  );
}

export default function SystemAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionId = useId();

  return (
    <div className="system-accordion">
      {stages.map((stage, index) => {
        const isActive = activeIndex === index;
        const triggerId = `${accordionId}-trigger-${stage.number}`;
        const panelId = `${accordionId}-panel-${stage.number}`;

        return (
          <article
            className={`system-accordion__item ${
              isActive ? 'is-active' : ''
            }`}
            key={stage.number}
          >
            <button
              type="button"
              className="system-accordion__trigger"
              onClick={() => setActiveIndex(index)}
              aria-expanded={isActive}
              aria-controls={panelId}
              id={triggerId}
            >
              <span className="system-accordion__number">{stage.number}</span>

              <span className="system-accordion__title-group">
                <strong>{stage.title}</strong>
                <small>{stage.label}</small>
              </span>

              <span className="system-accordion__summary">
                {stage.description}
              </span>

              <span
                className="system-accordion__icon"
                aria-hidden="true"
              >
                <ChevronDown size={20} />
              </span>
            </button>

            {isActive && (
              <div
                className="system-accordion__panel"
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
              >
                <div className="system-accordion__panel-copy">
                  <p>{stage.detail}</p>

                  <ul className="system-accordion__signals">
                    {stage.signals.map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                  </ul>
                </div>

                <StageVisual type={stage.visual} />
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}