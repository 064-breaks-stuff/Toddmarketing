import { Link } from 'react-router-dom';
import BookingEmbed from '../components/ui/BookingEmbed';
import PageRail from '../components/ui/PageRail';

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <Link className="back-link" to="/">
            <span aria-hidden="true">←</span>
            Return to Todd Marketing
          </Link>

          <p className="hero__eyebrow">Todd Marketing / Contact</p>

          <h1>
            Find the point where your growth system is losing momentum.
          </h1>

          <p>
            Book a Growth Systems Audit to map the path from demand to
            opportunity and identify the work that will create the most useful
            next move.
          </p>
        </div>
      </section>

      <section className="contact-booking">
        <div className="container">
          <div className="contact-booking__intro">
            <p className="section-label">Book a Growth Systems Audit</p>

            <p>
              Choose a time that works. We will use the conversation to
              understand your current acquisition, conversion, and
              follow-through systems before recommending a practical next
              step.
            </p>
          </div>

          <BookingEmbed />

          <p className="contact__privacy-note">
            By booking, you acknowledge that Todd Marketing may use the
            information you provide to schedule and manage your appointment,
            respond to your inquiry, and send related communications. Review
            our <Link to="/privacy">Privacy Policy</Link> and{' '}
            <Link to="/terms">Terms of Use</Link>.
          </p>
        </div>
      </section>

      <div className="container">
        <PageRail
          previous={{ label: 'About Todd Marketing', to: '/about' }}
          next={{ label: 'Explore the Growth System', to: '/ecosystem' }}
        />
      </div>
    </>
  );
}