import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import PageRail from '../components/ui/PageRail';
import { CONTACT_PATH } from '../app/siteConfig';

export default function AboutPage() {
  return (
    <>
      <section className="interior-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / About</p>

          <h1>
            Founder-led,
            <span> by design.</span>
          </h1>

          <p>
            Todd Marketing is a Florida-based growth infrastructure partner
            serving businesses across the United States through direct
            communication, clear scope, and connected execution.
          </p>
        </div>
      </section>

      <section className="about-statement-section">
        <div className="container about-statement-section__inner">
          <p className="section-label">Operating philosophy</p>

          <h2>
            The strategy should stay close to the work.
          </h2>

          <div>
            <p>
              Growth work becomes harder to trust when it is separated into
              vendors, handoffs, unclear ownership, and disconnected reports.
              Todd Marketing is intentionally built around direct involvement
              across the system.
            </p>

            <p>
              The objective is not to add noise. It is to establish the
              infrastructure that helps a business create, capture, convert,
              retain, and understand opportunity with greater clarity.
            </p>

            <Button to={CONTACT_PATH}>Book a Growth Systems Audit</Button>
          </div>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'Results Methodology', to: '/results' }}
          next={{ label: 'Return to Home', to: '/' }}
        />
      </div>
    </>
  );
}