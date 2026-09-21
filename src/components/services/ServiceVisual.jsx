export default function ServiceVisual({ type }) {
  if (type === 'conversion') {
    return (
      <div
        className="service-visual service-visual--conversion"
        aria-hidden="true"
      >
        <div className="service-visual__grid" />

        <div className="service-visual__conversion-browser">
          <div className="service-visual__browser-top">
            <span />
            <span />
            <span />
          </div>

          <div className="service-visual__browser-content">
            <span className="service-visual__browser-kicker" />
            <span className="service-visual__browser-title" />
            <span className="service-visual__browser-line" />
            <span className="service-visual__browser-line service-visual__browser-line--short" />
            <span className="service-visual__browser-cta" />
          </div>

          <div className="service-visual__browser-form">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="service-visual__conversion-path">
          <span className="service-visual__conversion-node service-visual__conversion-node--one" />
          <span className="service-visual__conversion-node service-visual__conversion-node--two" />
          <span className="service-visual__conversion-node service-visual__conversion-node--three" />
          <span className="service-visual__conversion-line service-visual__conversion-line--one" />
          <span className="service-visual__conversion-line service-visual__conversion-line--two" />
        </div>

        <div className="service-visual__caption">
          <span>Attention</span>
          <span>Clarity</span>
          <span>Action</span>
        </div>
      </div>
    );
  }

  if (type === 'advertising') {
    return (
      <div
        className="service-visual service-visual--advertising"
        aria-hidden="true"
      >
        <div className="service-visual__grid" />

        <div className="service-visual__intent-node service-visual__intent-node--google">
          <span>01</span>
          <strong>Google</strong>
          <small>Search intent</small>
        </div>

        <div className="service-visual__intent-node service-visual__intent-node--meta">
          <span>02</span>
          <strong>Meta</strong>
          <small>Demand creation</small>
        </div>

        <div className="service-visual__intent-node service-visual__intent-node--lsa">
          <span>03</span>
          <strong>LSA</strong>
          <small>Local lead flow</small>
        </div>

        <div className="service-visual__intent-core">
          <span className="service-visual__intent-core-ring" />
          <span className="service-visual__intent-core-ring service-visual__intent-core-ring--inner" />
          <strong>Qualified<br />Demand</strong>
        </div>

        <span className="service-visual__intent-line service-visual__intent-line--one" />
        <span className="service-visual__intent-line service-visual__intent-line--two" />
        <span className="service-visual__intent-line service-visual__intent-line--three" />

        <div className="service-visual__caption">
          <span>Channel fit</span>
          <span>Offer match</span>
          <span>Signal quality</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="service-visual service-visual--automation"
      aria-hidden="true"
    >
      <div className="service-visual__grid" />

      <div className="service-visual__workflow-node service-visual__workflow-node--lead">
        <span>01</span>
        <strong>Lead</strong>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--crm">
        <span>02</span>
        <strong>CRM</strong>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--route">
        <span>03</span>
        <strong>Route</strong>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--followup">
        <span>04</span>
        <strong>Follow-Up</strong>
      </div>

      <div className="service-visual__workflow-node service-visual__workflow-node--booking">
        <span>05</span>
        <strong>Booked</strong>
      </div>

      <span className="service-visual__workflow-line service-visual__workflow-line--one" />
      <span className="service-visual__workflow-line service-visual__workflow-line--two" />
      <span className="service-visual__workflow-line service-visual__workflow-line--three" />
      <span className="service-visual__workflow-line service-visual__workflow-line--four" />

      <div className="service-visual__caption">
        <span>Context retained</span>
        <span>Ownership assigned</span>
        <span>Next step visible</span>
      </div>
    </div>
  );
}