import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CONTACT_PATH } from '../../app/siteConfig';

export default function PageRail({
  previous = { label: 'Home', to: '/' },
  next = { label: 'Book a Growth Systems Audit', to: CONTACT_PATH }
}) {
  return (
    <nav className="page-rail" aria-label="Continue through Todd Marketing">
      <Link className="page-rail__item page-rail__item--previous" to={previous.to}>
        <ArrowLeft size={16} aria-hidden="true" />
        <span>
          <small>Previous</small>
          {previous.label}
        </span>
      </Link>

      <Link className="page-rail__item page-rail__item--next" to={next.to}>
        <span>
          <small>Next</small>
          {next.label}
        </span>
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </nav>
  );
}