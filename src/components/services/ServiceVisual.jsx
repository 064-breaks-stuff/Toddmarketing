function HeroFrame({ eyebrow, title, status, children, type }) {
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

function ConversionVisual() {
  return (
    <HeroFrame
      type="conversion"
      eyebrow="Conversion architecture"
      title="Click → clarity → action"
      status="Path mapped"
    >
      <div className="conversion-hero__browser">
        <div className="conversion-hero__browser-bar">
          <span className="conversion-hero__browser-brand">YOUR OFFER</span>

          <span className="conversion-hero__browser-action">
            Book an audit
          </span>
        </div>

        <div className="conversion-hero__browser-content">
          <div className="conversion-hero__offer">
            <span className="conversion-hero__offer-kicker">
              Clear value proposition
            </span>

            <strong>Make the next step obvious.</strong>

            <span className="conversion-hero__offer-copy" />
            <span className="conversion-hero__offer-copy conversion-hero__offer-copy--short" />

            <span className="conversion-hero__offer-button">
              Get started
            </span>
          </div>

          <div className="conversion-hero__capture">
            <span className="conversion-hero__capture-label">
              Lead capture
            </span>

            <span className="conversion-hero__capture-field" />
            <span className="conversion-hero__capture-field" />
            <span className="conversion-hero__capture-button">
              Continue
            </span>
          </div>
        </div>
      </div>

      <div className="conversion-hero__handoff">
        <div className="conversion-hero__handoff-step conversion-hero__handoff-step--visitor">
          <span>01</span>
          <strong>Visitor</strong>
        </div>

        <span className="conversion-hero__handoff-line conversion-hero__handoff-line--one" />

        <div className="conversion-hero__handoff-step conversion-hero__handoff-step--action">
          <span>02</span>
          <strong>Action</strong>
        </div>

        <span className="conversion-hero__handoff-line conversion-hero__handoff-line--two" />

        <div className="conversion-hero__handoff-step conversion-hero__handoff-step--crm">
          <span>03</span>
          <strong>CRM context</strong>
        </div>
      </div>

      <div className="service-visual__footer">
        <span>Message match</span>
        <span>Focused action</span>
        <span>Context preserved</span>
      </div>
    </HeroFrame>
  );
}

function AdvertisingVisual() {
  return (
    <HeroFrame
      type="advertising"
      eyebrow="Demand generation"
      title="Channel → intent → opportunity"
      status="Signals aligned"
    >
      <div className="advertising-hero__channel advertising-hero__channel--google">
        <span className="advertising-hero__channel-number">01</span>
        <strong>Google Ads</strong>
        <small>High-intent search</small>
      </div>

      <div className="advertising-hero__channel advertising-hero__channel--meta">
        <span className="advertising-hero__channel-number">02</span>
        <strong>Meta Ads</strong>
        <small>Demand creation</small>
      </div>

      <div className="advertising-hero__channel advertising-hero__channel--lsa">
        <span className="advertising-hero__channel-number">03</span>
        <strong>Local Services</strong>
        <small>Local lead flow</small>
      </div>

      <span className="advertising-hero__line advertising-hero__line--google" />
      <span className="advertising-hero__line advertising-hero__line--meta" />
      <span className="advertising-hero__line advertising-hero__line--lsa" />

      <div className="advertising-hero__qualification">
        <span className="advertising-hero__qualification-kicker">
          Filtered by fit
        </span>

        <strong>
          Qualified
          <br />
          demand
        </strong>

        <span className="advertising-hero__qualification-rule" />

        <small>Offer + landing page + CRM signal</small>
      </div>

      <div className="advertising-hero__outcome">
        <span>Outcome signal</span>

        <div>
          <i />
          <strong>Opportunity created</strong>
        </div>
      </div>

      <div className="service-visual__footer">
        <span>Channel role</span>
        <span>Offer match</span>
        <span>Lead quality loop</span>
      </div>
    </HeroFrame>
  );
}

function AutomationVisual() {
  return (
    <HeroFrame
      type="automation"
      eyebrow="Revenue operations"
      title="Lead → owner → follow-through"
      status="Workflow active"
    >
      <div className="automation-hero__workflow">
        <div className="automation-hero__step automation-hero__step--capture">
          <span className="automation-hero__step-number">01</span>
          <strong>Capture</strong>
          <small>Source + service context</small>
        </div>

        <span className="automation-hero__connector automation-hero__connector--one" />

        <div className="automation-hero__step automation-hero__step--crm">
          <span className="automation-hero__step-number">02</span>
          <strong>Organize</strong>
          <small>CRM + pipeline stage</small>
        </div>

        <span className="automation-hero__connector automation-hero__connector--two" />

        <div className="automation-hero__step automation-hero__step--route">
          <span className="automation-hero__step-number">03</span>
          <strong>Route</strong>
          <small>Right owner, right timing</small>
        </div>

        <span className="automation-hero__connector automation-hero__connector--three" />

        <div className="automation-hero__step automation-hero__step--followup">
          <span className="automation-hero__step-number">04</span>
          <strong>Follow up</strong>
          <small>Automated next step</small>
        </div>

        <span className="automation-hero__connector automation-hero__connector--four" />

        <div className="automation-hero__step automation-hero__step--booked">
          <span className="automation-hero__step-number">05</span>
          <strong>Booked</strong>
          <small>Visible outcome</small>
        </div>
      </div>

      <div className="automation-hero__monitor">
        <span className="automation-hero__monitor-label">System visibility</span>

        <div className="automation-hero__monitor-row">
          <span>New lead</span>
          <strong>Assigned</strong>
        </div>

        <div className="automation-hero__monitor-row">
          <span>Response SLA</span>
          <strong>Active</strong>
        </div>

        <div className="automation-hero__monitor-row">
          <span>Booking state</span>
          <strong>Tracked</strong>
        </div>
      </div>

      <div className="service-visual__footer service-visual__footer--dark">
        <span>Context retained</span>
        <span>Ownership assigned</span>
        <span>Next step visible</span>
      </div>
    </HeroFrame>
  );
}

export default function ServiceVisual({ type }) {
  if (type === 'conversion') {
    return <ConversionVisual />;
  }

  if (type === 'advertising') {
    return <AdvertisingVisual />;
  }

  return <AutomationVisual />;
}