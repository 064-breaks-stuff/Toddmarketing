import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import BookingEmbed from '../components/ui/BookingEmbed';
import PageRail from '../components/ui/PageRail';

const preparationItems = [
  {
    title: 'Business, website, and service area',
    copy: 'Bring the basics that shape local demand: what you offer, where you operate, and where buyers currently learn about you.'
  },
  {
    title: 'Current lead sources',
    copy: 'Note the sources currently creating enquiries, such as Google Business Profile, website, Google Ads, Local Services Ads, referrals, or other channels.'
  },
  {
    title: 'Current systems',
    copy: 'Identify what is already in place for CRM, follow-up, booking, review requests, source tracking, and reporting.'
  },
  {
    title: 'The main constraint',
    copy: 'Be ready to describe where momentum is leaking now: visibility, demand, conversion, response speed, reputation, or reporting.'
  },
  {
    title: 'Your desired starting point',
    copy: 'Decide whether the immediate need is one missing piece or a complete connected system built around the full customer journey.'
  }
];

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

          <section
            className="contact-preparation"
            aria-labelledby="contact-preparation-title"
          >
            <div className="contact-preparation__intro">
              <p className="section-label">Arrive with useful context</p>

              <h2 id="contact-preparation-title">
                Start with the constraint—not a generic sales call.
              </h2>

              <p>
                This is preparation guidance only. The booking calendar below
                remains the appointment step; bring this context into the
                conversation so the audit can focus on the right system gap.
              </p>
            </div>

            <ul className="contact-preparation__list">
              {preparationItems.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>

                  <CheckCircle2 size={19} strokeWidth={1.6} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </section>

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