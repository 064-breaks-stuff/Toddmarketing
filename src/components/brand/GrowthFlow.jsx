import { useEffect, useState } from 'react';

const statusMessages = [
  'System online / Handoffs connected',
  'Demand captured / CRM routed',
  'Follow-up active / Context preserved',
  'Opportunity visible / Next step ready'
];

function SystemIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="16" cy="32" r="5" />
      <circle cx="32" cy="16" r="5" />
      <circle cx="32" cy="48" r="5" />
      <circle cx="48" cy="32" r="5" />
      <path d="M21 32h22M32 21v22M19.5 28.5 28.5 19.5M35.5 44.5l9-9M19.5 35.5l9 9M35.5 19.5l9 9" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="8" y="10" width="32" height="29" rx="2" />
      <path d="M8 18h32M16 7v7M32 7v7M17 28l4 4 10-10" />
    </svg>
  );
}

function SystemPulse() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % statusMessages.length);
      setCycle((current) => current + 1);
    }, 7600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="system-pulse"
      aria-live="polite"
      aria-label={`System status: ${statusMessages[messageIndex]}`}
    >
      <div className="system-pulse__shell" key={cycle}>
        <span className="system-pulse__dot" aria-hidden="true" />

        <span className="system-pulse__message">
          {statusMessages[messageIndex]}
        </span>
      </div>
    </div>
  );
}

export default function GrowthFlow() {
  return (
    <div
      className="opportunity-relay"
      role="img"
      aria-label="Todd Marketing turns qualified demand from Google, Meta, and Local Services into a sales-ready opportunity through a connected growth system."
    >
      <div className="opportunity-relay__grid" aria-hidden="true" />
      <div className="opportunity-relay__vignette" aria-hidden="true" />
      <div className="opportunity-relay__ambient" aria-hidden="true" />

      <div className="opportunity-relay__topbar" aria-hidden="true">
        <span>Todd Marketing / Growth System</span>

        <span className="opportunity-relay__status">
          <i />
          System connected
        </span>
      </div>

      <SystemPulse />

      <div className="opportunity-relay__content">
        <section className="opportunity-relay__stage opportunity-relay__stage--demand">
          <span className="opportunity-relay__index">01</span>

          <p className="opportunity-relay__eyebrow">Demand enters</p>

          <h2>
            Qualified
            <span> attention.</span>
          </h2>

          <p className="opportunity-relay__copy">
            Google Search, Meta, and Local Services generate the initial signal.
          </p>

          <div className="opportunity-relay__tags">
            <span>Google</span>
            <span>Meta</span>
            <span>Local Services</span>
          </div>
        </section>

        <section className="opportunity-relay__stage opportunity-relay__stage--system">
          <span className="opportunity-relay__index">02</span>

          <div className="opportunity-relay__system-icon">
            <SystemIcon />
          </div>

          <p className="opportunity-relay__eyebrow">Todd Growth System</p>

          <h2>
            Capture. Route.
            <span> Follow up.</span>
          </h2>

          <p className="opportunity-relay__copy">
            Conversion architecture, CRM intelligence, and automation work as one connected operating layer.
          </p>

          <div className="opportunity-relay__tags">
            <span>Website + Funnel</span>
            <span>CRM</span>
            <span>Automation</span>
          </div>
        </section>

        <section className="opportunity-relay__outcome">
          <div className="opportunity-relay__outcome-header">
            <span className="opportunity-relay__index">03</span>
            <span className="opportunity-relay__outcome-label">
              System outcome
            </span>
          </div>

          <div className="opportunity-relay__outcome-icon">
            <CalendarIcon />
          </div>

          <div className="opportunity-relay__outcome-copy">
            <h2>
              Sales-Ready
              <span> Opportunity.</span>
            </h2>

            <p>
              Booked, routed, and visible to the right team.
            </p>
          </div>

          <div className="opportunity-relay__outcome-status">
            <span>
              <i />
              Booked
            </span>

            <span>
              <i />
              Routed
            </span>

            <span>
              <i />
              Visible
            </span>
          </div>

          <div className="opportunity-relay__outcome-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>
      </div>

      <div className="opportunity-relay__footer" aria-hidden="true">
        Demand → System → Opportunity
      </div>
    </div>
  );
}