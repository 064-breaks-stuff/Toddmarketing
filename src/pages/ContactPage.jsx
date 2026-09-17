import { Link } from 'react-router-dom';
import BookingEmbed from '../components/ui/BookingEmbed';

export default function ContactPage() {
  return (
    <>
      <section className="contact-page">
        <div className="container">
          <Link className="back-link" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <div className="contact-page__heading">
            <p className="section-label">Start here</p>

            <h1>Book a Growth Systems Audit.</h1>

            <p>
              Bring the part of your growth system that feels unclear,
              disconnected, or harder to manage than it should be. We will start
              by identifying the highest-leverage next step.
            </p>
          </div>

          <BookingEmbed />

          <section className="contact-expectations" aria-labelledby="expectations-title">
            <p className="section-label">What to expect</p>

            <h2 id="expectations-title">
              A practical starting point—not a generic sales call.
            </h2>

            <div className="contact-expectations__grid">
              <article>
                <span>01</span>
                <h3>Current system</h3>
                <p>
                  We begin with the channels, pages, CRM processes, and
                  follow-up systems your business already relies on.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Primary friction</h3>
                <p>
                  We identify where demand, lead quality, response time,
                  visibility, or attribution is losing momentum.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Clear next move</h3>
                <p>
                  You leave with a clearer view of the highest-value system
                  layer to improve first.
                </p>
              </article>
            </div>
          </section>

          <section className="contact-explore">
            <p className="section-label">While you decide</p>

            <div className="contact-explore__links">
              <Link to="/ecosystem">
                <span>01</span>
                <strong>Explore the Growth System</strong>
                <span aria-hidden="true">→</span>
              </Link>

              <Link to="/">
                <span>02</span>
                <strong>Return to Home</strong>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}