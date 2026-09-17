const flowSteps = [
  {
    number: '01',
    label: 'Paid Demand',
    detail: 'Google / Meta / LSA',
    type: 'demand'
  },
  {
    number: '02',
    label: 'Conversion Page',
    detail: 'Offer / CTA / Form',
    type: 'capture'
  },
  {
    number: '03',
    label: 'CRM Lead',
    detail: 'Route / Qualify / Assign',
    type: 'crm'
  },
  {
    number: '04',
    label: 'Automated Follow-Up',
    detail: 'SMS / Email / Workflow',
    type: 'automation'
  },
  {
    number: '05',
    label: 'Booked Opportunity',
    detail: 'Calendar / Sales Team',
    type: 'booking'
  }
];

function DemandIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="18" cy="24" r="8" />
      <path d="M26 18h12M26 24h16M26 30h10" />
    </svg>
  );
}

function CaptureIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="9" y="8" width="30" height="32" rx="2" />
      <path d="M15 16h18M15 22h12M15 31h18" />
      <rect x="15" y="28" width="11" height="4" rx="1" />
    </svg>
  );
}

function CrmIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="8" y="10" width="32" height="28" rx="2" />
      <circle cx="18" cy="21" r="4" />
      <path d="M12 32c1.5-4 4-6 6-6s4.5 2 6 6M28 19h7M28 25h7M28 31h5" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="12" cy="24" r="4" />
      <circle cx="35" cy="13" r="4" />
      <circle cx="35" cy="35" r="4" />
      <path d="M16 24h8l7-11M24 24l7 11" />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="9" y="10" width="30" height="29" rx="2" />
      <path d="M9 18h30M16 7v7M32 7v7M17 28l4 4 10-10" />
    </svg>
  );
}

const icons = {
  demand: DemandIcon,
  capture: CaptureIcon,
  crm: CrmIcon,
  automation: AutomationIcon,
  booking: BookingIcon
};

export default function GrowthFlow() {
  return (
    <div className="growth-flow" aria-label="From paid demand to booked opportunity">
      <div className="growth-flow__ambient" aria-hidden="true" />

      <div className="growth-flow__header" aria-hidden="true">
        <span>Growth system / Live path</span>
        <span>Demand → Opportunity</span>
      </div>

      <div className="growth-flow__track" aria-hidden="true">
        <span />
      </div>

      <div className="growth-flow__steps">
        {flowSteps.map((step, index) => {
          const Icon = icons[step.type];

          return (
            <article
              className={`growth-flow__step growth-flow__step--${step.type}`}
              key={step.number}
              style={{ '--step-index': index }}
            >
              <div className="growth-flow__step-top">
                <span>{step.number}</span>
                <Icon />
              </div>

              <div className="growth-flow__step-copy">
                <h2>{step.label}</h2>
                <p>{step.detail}</p>
              </div>

              {index < flowSteps.length - 1 && (
                <span className="growth-flow__connector" aria-hidden="true">
                  →
                </span>
              )}
            </article>
          );
        })}
      </div>

      <div className="growth-flow__footer" aria-hidden="true">
        <span>Input / qualified attention</span>
        <span>Output / sales-ready opportunity</span>
      </div>
    </div>
  );
}