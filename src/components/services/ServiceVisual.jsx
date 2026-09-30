function DiagramFrame({ eyebrow, title, status, children, type }) {
  return (
    <div className={`service-visual service-visual--${type}`} aria-hidden="true">
      <div className="service-visual__grid" />

      <div className="service-visual__topline">
        <span>{eyebrow}</span>

        <span className="service-visual__live-status">
          <i />
          {status}
        </span>
      </div>

      <div className="service-visual__heading">
        <span>{title}</span>
        <span className="service-visual__heading-rule" />
      </div>

      {children}
    </div>
  );
}

function DemandGenerationVisual() {
  return (
    <DiagramFrame
      type="advertising"
      eyebrow="Local demand command flow"
      title="Visibility → intent → opportunity"
      status="Signal mapped"
    >
      <div className="demand-flow">
        <div className="demand-flow__input demand-flow__input--search">
          <span>01</span>
          <strong>Google Search</strong>
          <small>Active demand</small>
        </div>

        <div className="demand-flow__input demand-flow__input--gbp">
          <span>02</span>
          <strong>Google Business Profile</strong>
          <small>Local discovery</small>
        </div>

        <div className="demand-flow__input demand-flow__input--lsa">
          <span>03</span>
          <strong>Local Services Ads</strong>
          <small>Service-area intent</small>
        </div>

        <span className="demand-flow__connector demand-flow__connector--one" />
        <span className="demand-flow__connector demand-flow__connector--two" />
        <span className="demand-flow__connector demand-flow__connector--three" />

        <div className="demand-flow__filter">
          <span className="demand-flow__filter-label">Fit filter</span>
          <strong>Offer + location + intent</strong>
          <small>Channel role is matched to the buyer’s search moment.</small>
        </div>

        <span className="demand-flow__connector demand-flow__connector--four" />

        <div className="demand-flow__output">
          <span>Outcome signal</span>
          <strong>Qualified local opportunity</strong>

          <div>
            <i />
            Call
          </div>

          <div>
            <i />
            Form
          </div>

          <div>
            <i />
            Booking
          </div>
        </div>
      </div>

      <div className="service-visual__footer">
        <span>Search visibility</span>
        <span>Message alignment</span>
        <span>Lead-quality context</span>
      </div>
    </DiagramFrame>
  );
}

function WebsitesFunnelsVisual() {
  return (
    <DiagramFrame
      type="websites-funnels"
      eyebrow="Page-to-conversion wireflow"
      title="Traffic → proof → action → handoff"
      status="Path designed"
    >
      <div className="wireflow">
        <div className="wireflow__source">
          <span>01</span>
          <strong>Traffic source</strong>
          <small>Search · GBP · LSA · referral</small>
        </div>

        <span className="wireflow__arrow wireflow__arrow--one" />

        <div className="wireflow__page">
          <div className="wireflow__page-bar">
            <span />
            <span />
            <span />
          </div>

          <div className="wireflow__page-content">
            <span className="wireflow__eyebrow" />
            <strong>Focused landing page</strong>
            <span className="wireflow__line" />
            <span className="wireflow__line wireflow__line--short" />

            <div className="wireflow__proof">
              <span>Proof</span>
              <i />
              <i />
              <i />
            </div>

            <span className="wireflow__cta">Clear next step</span>
          </div>
        </div>

        <span className="wireflow__arrow wireflow__arrow--two" />

        <div className="wireflow__action">
          <span>03</span>
          <strong>Call · Form · Booking</strong>
          <small>One useful conversion action</small>
        </div>

        <span className="wireflow__arrow wireflow__arrow--three" />

        <div className="wireflow__handoff">
          <span>04</span>
          <strong>CRM handoff</strong>
          <small>Source, service interest, and next owner retained</small>
        </div>
      </div>

      <div className="service-visual__footer">
        <span>Focused page</span>
        <span>Trust before action</span>
        <span>Context retained</span>
      </div>
    </DiagramFrame>
  );
}

function AutomationVisual() {
  return (
    <DiagramFrame
      type="automation"
      eyebrow="Lead lifecycle loop"
      title="Lead → response → customer loop"
      status="Workflow active"
    >
      <div className="lifecycle">
        <div className="lifecycle__track">
          <div className="lifecycle__step lifecycle__step--lead">
            <span>01</span>
            <strong>Lead enters</strong>
            <small>Source and service context captured</small>
          </div>

          <span className="lifecycle__connector" />

          <div className="lifecycle__step lifecycle__step--response">
            <span>02</span>
            <strong>Respond</strong>
            <small>Right owner, right timing</small>
          </div>

          <span className="lifecycle__connector" />

          <div className="lifecycle__step lifecycle__step--nurture">
            <span>03</span>
            <strong>Nurture</strong>
            <small>Follow-up stays relevant</small>
          </div>

          <span className="lifecycle__connector" />

          <div className="lifecycle__step lifecycle__step--booked">
            <span>04</span>
            <strong>Booked</strong>
            <small>Pipeline and outcome visible</small>
          </div>
        </div>

        <div className="lifecycle__loop">
          <span>Customer loop</span>

          <div>
            <strong>Review request</strong>
            <i />
            <strong>Reactivation</strong>
            <i />
            <strong>Reporting</strong>
          </div>
        </div>

        <div className="lifecycle__monitor">
          <span>System status</span>

          <div>
            <small>Lead owner</small>
            <strong>Assigned</strong>
          </div>

          <div>
            <small>Next action</small>
            <strong>Active</strong>
          </div>

          <div>
            <small>Outcome</small>
            <strong>Tracked</strong>
          </div>
        </div>
      </div>

      <div className="service-visual__footer service-visual__footer--ink">
        <span>Ownership clear</span>
        <span>Reputation active</span>
        <span>Reporting visible</span>
      </div>
    </DiagramFrame>
  );
}

export default function ServiceVisual({ type }) {
  if (type === 'advertising') {
    return <DemandGenerationVisual />;
  }

  if (type === 'websites-funnels' || type === 'conversion') {
    return <WebsitesFunnelsVisual />;
  }

  return <AutomationVisual />;
}