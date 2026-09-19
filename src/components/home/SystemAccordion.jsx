import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function StageVisual({ stage }) {
  if (stage.title === 'Demand') {
    return (
      <svg viewBox="0 0 160 100" aria-hidden="true">
        <circle cx="28" cy="50" r="7" />
        <circle cx="74" cy="28" r="7" />
        <circle cx="74" cy="72" r="7" />
        <circle cx="132" cy="50" r="9" />
        <path d="M35 50h26l7-17M35 50h26l7 17M81 28h38M81 72h38" />
      </svg>
    );
  }

  if (stage.title === 'Capture') {
    return (
      <svg viewBox="0 0 160 100" aria-hidden="true">
        <rect x="24" y="16" width="72" height="68" rx="2" />
        <path d="M38 32h44M38 42h30M38 59h44" />
        <rect x="38" y="54" width="22" height="8" rx="1" />
        <path d="M105 50h30" />
        <circle cx="140" cy="50" r="8" />
      </svg>
    );
  }

  if (stage.title === 'Convert') {
    return (
      <svg viewBox="0 0 160 100" aria-hidden="true">
        <rect x="18" y="16" width="57" height="68" rx="2" />
        <circle cx="38" cy="40" r="8" />
        <path d="M26 64c3-10 8-15 12-15s9 5 12 15M54 36h12M54 46h12M54 56h9" />
        <path d="M88 50h28" />
        <rect x="119" y="34" width="24" height="32" rx="2" />
        <path d="M125 44h12M125 51h12M125 58h8" />
      </svg>
    );
  }

  if (stage.title === 'Retain') {
    return (
      <svg viewBox="0 0 160 100" aria-hidden="true">
        <circle cx="28" cy="50" r="7" />
        <circle cx="77" cy="24" r="7" />
        <circle cx="77" cy="76" r="7" />
        <circle cx="128" cy="50" r="9" />
        <path d="M35 50h22l14-20M35 50h22l14 20M84 24h35M84 76h35" />
        <path d="M124 33v-9M124 76v-9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 100" aria-hidden="true">
      <path d="M22 74V28M22 74h112" />
      <path d="M35 63l28-16 22 8 38-32" />
      <circle cx="35" cy="63" r="5" />
      <circle cx="63" cy="47" r="5" />
      <circle cx="85" cy="55" r="5" />
      <circle cx="123" cy="23" r="7" />
      <path d="M119 23h16M127 15v16" />
    </svg>
  );
}

export default function SystemAccordion({ stages }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionId = useId();

  return (
    <div className="system-accordion">
      {stages.map((stage, index) => {
        const isActive = activeIndex === index;
        const panelId = `${sectionId}-panel-${index}`;
        const buttonId = `${sectionId}-button-${index}`;

        return (
          <article
            className={`system-accordion__item ${
              isActive ? 'is-active' : ''
            }`}
            key={stage.number}
          >
            <button
              className="system-accordion__trigger"
              type="button"
              id={buttonId}
              aria-expanded={isActive}
              aria-controls={panelId}
              onClick={() => setActiveIndex(isActive ? -1 : index)}
            >
              <span className="system-accordion__number">{stage.number}</span>

              <span className="system-accordion__title-wrap">
                <strong>{stage.title}</strong>
                <small>{stage.shortLabel}</small>
              </span>

              <span className="system-accordion__icon" aria-hidden="true">
                <ChevronDown size={19} />
              </span>
            </button>

            <div
              className="system-accordion__panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isActive}
            >
              <div className="system-accordion__panel-copy">
                <p>{stage.detail}</p>

                <span className="system-accordion__status">
                  System stage / {stage.number}
                </span>
              </div>

              <div className="system-accordion__visual">
                <StageVisual stage={stage} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}