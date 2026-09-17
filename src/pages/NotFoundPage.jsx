import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { CONTACT_PATH } from '../app/siteConfig';

export default function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="container">
        <p className="section-label">404 / Route unavailable</p>

        <h1>
          This path is not
          <span> part of the system.</span>
        </h1>

        <p>
          Return to Todd Marketing to explore the Growth System or book a
          focused conversation.
        </p>

        <div className="not-found-page__actions">
          <Button to={CONTACT_PATH}>Book a Growth Systems Audit</Button>
          <Link to="/">Return Home</Link>
        </div>
      </div>
    </section>
  );
}