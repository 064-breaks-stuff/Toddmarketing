import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { BOOKING_CALENDAR_URL } from '../../app/siteConfig';

export default function BookingEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="booking-embed" aria-labelledby="booking-calendar-title">
      <div className="booking-embed__topline">
        <p id="booking-calendar-title">Todd Marketing / Booking</p>
        <span className={loaded ? 'is-live' : ''}>
          {loaded ? 'Calendar ready' : 'Connecting calendar'}
        </span>
      </div>

      <div className="booking-embed__shell">
        {!loaded && (
          <div className="booking-embed__loading" role="status" aria-live="polite">
            <div className="booking-embed__loader" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>Preparing available times…</p>
          </div>
        )}

        <iframe
          className="booking-embed__frame"
          src={BOOKING_CALENDAR_URL}
          title="Book a Todd Marketing Growth Systems Audit"
          loading="eager"
          onLoad={() => setLoaded(true)}
          allow="clipboard-read; clipboard-write"
        />
      </div>

      <p className="booking-embed__fallback">
        Calendar not displaying correctly?{' '}
        <a
          href={BOOKING_CALENDAR_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open the booking page
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </p>
    </section>
  );
}