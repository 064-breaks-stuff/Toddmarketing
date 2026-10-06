import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'Visibility & Demand',
    label: 'Get found',
    description:
      'Create qualified local attention through Google Search, Google Business Profile, and Local Services Ads aligned to real buying intent.',
    detail:
      'The first layer combines where local buyers search, how the business appears in that moment, and which acquisition channels are worth connecting to the wider system.',
    signals: [
      'Google Ads',
      'Google Business Profile',
      'Local Services Ads'
    ],
    visualType: 'campaigns',
    visualData: {
      title: 'Campaign overview',
      channels: ['Search ads', 'Business Profile', 'Local Services Ads'],
      signals: ['Lead volume', 'Cost per lead', 'Conversion rate'],
      trend: [28, 42, 36, 58, 52, 72, 84]
    }
  },
  {
    number: '02',
    title: 'Conversion',
    label: 'Intent captured',
    description:
      'Give that attention a clear next step through conversion architecture, landing experiences, and friction-light pathways.',
    detail:
      'The conversion path should make the offer obvious, establish trust quickly, and move visitors toward one useful action instead of multiple competing decisions.',
    signals: ['Website paths', 'Landing pages', 'Calls and forms'],
    visualType: 'capture',
    visualData: {
      title: 'Lead intake',
      source: 'Website form',
      fields: ['Name', 'Email', 'Service needed'],
      steps: ['Form submitted', 'Source preserved', 'Contact created']
    }
  },
  {
    number: '03',
    title: 'Follow-Up',
    label: 'Lead routed',
    description:
      'Route, qualify, and respond through CRM intelligence that preserves source, context, ownership, and urgency.',
    detail:
      'A lead becomes a usable opportunity only when the correct team member receives it quickly with the information needed to take the next step.',
    signals: ['GoHighLevel CRM', 'Lead routing', 'Pipeline visibility'],
    visualType: 'pipeline',
    visualData: {
      title: 'Opportunity pipeline',
      columns: ['New Lead', 'Contacted', 'Qualified', 'Booked', 'Won'],
      context: ['Source retained', 'Owner assigned', 'Next task ready']
    }
  },
  {
    number: '04',
    title: 'Reputation',
    label: 'Customer loop active',
    description:
      'Keep customer momentum moving through nurture, booking workflows, review requests, reactivation, and relationship continuity.',
    detail:
      'Follow-up should be consistent without becoming impersonal. Automation protects response time while the business keeps the right human moments in the journey.',
    signals: ['Nurture', 'Review requests', 'Reactivation'],
    visualType: 'automation',
    visualData: {
      title: 'Customer continuity',
      trigger: 'Service completed',
      decision: 'Customer responded?',
      branches: [
        {
          label: 'Yes',
          steps: ['Send review request', 'Create team task']
        },
        {
          label: 'Not yet',
          steps: ['Send email / SMS', 'Schedule follow-up']
        }
      ],
      completion: 'Follow-up recorded'
    }
  },
  {
    number: '05',
    title: 'Reporting',
    label: 'Revenue visible',
    description:
      'Return outcome signals upstream so budgets, offers, automation, and customer journeys improve with context.',
    detail:
      'The strongest next decision is informed by what happened after the click: which source created the opportunity, what progressed, and where momentum slowed.',
    signals: ['Attribution', 'Reporting', 'Iteration'],
    visualType: 'reporting',
    visualData: {
      title: 'Reporting & optimization',
      metrics: ['Qualified leads', 'Bookings', 'Revenue'],
      sources: ['Search', 'Website', 'Referrals'],
      insight: 'Review sources alongside booked outcomes.',
      action: 'Next action: inspect follow-up gaps'
    }
  }
];

function DeviceFrame({ title, children }) {
  return (
    <div className="system-device">
      <div className="system-device__screen">
        <div className="system-device__topbar">
          <span className="system-device__camera" aria-hidden="true" />
          <span>{title}</span>
          <span className="system-device__demo">Illustrative interface</span>
        </div>

        <div
          className="system-device__viewport"
          tabIndex={0}
          role="region"
          aria-label={`${title} illustrative interface`}
        >
          {children}
        </div>
      </div>

      <div className="system-device__base" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}

function TrendChart({ values }) {
  return (
    <svg
      className="system-demo__chart"
      viewBox="0 0 240 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="system-demo__chart-grid"
        d="M0 20H240 M0 45H240 M0 70H240"
      />
      <polyline
        className="system-demo__chart-line"
        points={values
          .map((value, index) => {
            const x = 8 + (index / (values.length - 1)) * 224;
            const y = 82 - value * 0.75;

            return `${x},${y}`;
          })
          .join(' ')}
      />
    </svg>
  );
}

function CampaignVisual({ data }) {
  return (
    <div className="system-demo system-demo--campaigns">
      <div className="system-demo__channels">
        {data.channels.map((channel) => (
          <div className="system-demo__card" key={channel}>
            <span className="system-demo__indicator" aria-hidden="true" />
            <strong>{channel}</strong>
            <small>Connected channel</small>
          </div>
        ))}
      </div>

      <div className="system-demo__card system-demo__trend">
        <div className="system-demo__heading">
          <strong>Demand trend</strong>
          <small>Illustrative—not client results</small>
        </div>
        <TrendChart values={data.trend} />
      </div>

      <div className="system-demo__metrics">
        {data.signals.map((signal) => (
          <div key={signal}>
            <small>{signal}</small>
            <strong>Track</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaptureVisual({ data }) {
  return (
    <div className="system-demo system-demo--capture">
      <div className="system-demo__card system-demo__form">
        <span className="system-demo__eyebrow">Enquiry form</span>
        <strong>Request a conversation</strong>

        {data.fields.map((field) => (
          <div className="system-demo__field" key={field}>
            {field}
          </div>
        ))}

        <span className="system-demo__button">Submission received ✓</span>
      </div>

      <div className="system-demo__intake">
        <span className="system-demo__badge">Source: {data.source}</span>

        <ol className="system-demo__steps">
          {data.steps.map((step) => (
            <li key={step}>
              <span aria-hidden="true">✓</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="system-demo__card system-demo__contact">
          <span className="system-demo__avatar" aria-hidden="true">✓</span>
          <div>
            <strong>New contact record</strong>
            <small>Source + enquiry saved</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineVisual({ data }) {
  return (
    <div className="system-demo system-demo--pipeline">
      <div className="system-demo__pipeline">
        {data.columns.map((column, index) => (
          <div className="system-demo__column" key={column}>
            <strong>{column}</strong>
            <span className="system-demo__column-line" aria-hidden="true" />

            <div className="system-demo__lead">
              <small>Opportunity {String(index + 1).padStart(2, '0')}</small>
              <span>Owner assigned</span>
            </div>
          </div>
        ))}
      </div>

      <div className="system-demo__progression">
        <span>Enquiry</span>
        <span aria-hidden="true">→</span>
        <strong>Booked outcome</strong>
      </div>

      <div className="system-demo__context">
        {data.context.map((item) => (
          <span className="system-demo__badge" key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function AutomationVisual({ data }) {
  return (
    <div className="system-demo system-demo--automation">
      <div className="system-demo__node system-demo__node--primary">
        <small>Trigger</small>
        <strong>{data.trigger}</strong>
      </div>

      <span className="system-demo__connector" aria-hidden="true" />

      <div className="system-demo__decision">{data.decision}</div>

      <div className="system-demo__branches">
        {data.branches.map((branch) => (
          <div className="system-demo__branch" key={branch.label}>
            <span className="system-demo__branch-label">{branch.label}</span>

            {branch.steps.map((step) => (
              <div className="system-demo__node" key={step}>{step}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="system-demo__completion">
        <span aria-hidden="true">✓</span> {data.completion}
      </div>
    </div>
  );
}

function ReportingVisual({ data }) {
  return (
    <div className="system-demo system-demo--reporting">
      <div className="system-demo__metrics">
        {data.metrics.map((metric) => (
          <div key={metric}>
            <small>{metric}</small>
            <strong>View trend ↗</strong>
          </div>
        ))}
      </div>

      <div className="system-demo__report-grid">
        <div className="system-demo__card">
          <strong>Source attribution</strong>

          {data.sources.map((source, index) => (
            <div className="system-demo__source" key={source}>
              <span>{source}</span>
              <span
                className={`system-demo__source-bar system-demo__source-bar--${
                  index + 1
                }`}
                aria-hidden="true"
              />
            </div>
          ))}

          <small>Illustrative source mix</small>
        </div>

        <div className="system-demo__card system-demo__insight">
          <span className="system-demo__eyebrow">Decision context</span>
          <strong>{data.insight}</strong>
          <p>{data.action}</p>
        </div>
      </div>
    </div>
  );
}

function StageVisual({ type, data }) {
  let content;

  switch (type) {
    case 'campaigns':
      content = <CampaignVisual data={data} />;
      break;
    case 'capture':
      content = <CaptureVisual data={data} />;
      break;
    case 'pipeline':
      content = <PipelineVisual data={data} />;
      break;
    case 'automation':
      content = <AutomationVisual data={data} />;
      break;
    case 'reporting':
      content = <ReportingVisual data={data} />;
      break;
    default:
      return null;
  }

  return (
    <div className="system-accordion__visual">
      <DeviceFrame title={data.title}>{content}</DeviceFrame>
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

              <span className="system-accordion__icon" aria-hidden="true">
                <ChevronDown size={20} />
              </span>
            </button>

            <div
              className="system-accordion__panel"
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isActive}
            >
              {isActive && (
                <>
                  <div className="system-accordion__panel-copy">
                    <p>{stage.detail}</p>

                    <ul className="system-accordion__signals">
                      {stage.signals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  </div>

                  <StageVisual
                    type={stage.visualType}
                    data={stage.visualData}
                  />
                </>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}