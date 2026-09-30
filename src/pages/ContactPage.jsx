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
            Plan the connected system behind your next stage of growth.
          </h1>

          <p>
            We can solve a single gap. But businesses that want sustainable
            growth are best served by a connected system built across
            visibility, demand, conversion, follow-up, reputation, and
            reporting.
          </p>
        </div>
      </section>

      <section className="contact-booking">
        <div className="container">
          <div className="contact-booking__intro">
            <p className="section-label">Plan a Growth Infrastructure Audit</p>

            <p>
              Choose a time that works. We will identify where local demand,
              conversion, follow-up, reputation, or reporting is losing
              momentum—then map the practical next step and the wider system
              that supports it.
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