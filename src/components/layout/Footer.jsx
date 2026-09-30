import { Link } from 'react-router-dom';
import BrandLogo from '../brand/BrandLogo';
import { CONTACT_PATH } from '../../app/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__label">
              Growth infrastructure for service businesses
            </p>

            <h2>
              Build the connected system behind your next stage of growth.
            </h2>
          </div>

          <Link className="site-footer__cta" to={CONTACT_PATH}>
            Book a Growth Infrastructure Audit
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="site-footer__bottom">
          <div>
            <Link
              className="site-footer__brand"
              to="/"
              aria-label="Todd Marketing home"
            >
              <BrandLogo />
            </Link>

            <p className="site-footer__location">
              Wisconsin-originated. Serving clients across the United States.
            </p>
          </div>

          <nav className="site-footer__links" aria-label="Footer navigation">
            <Link to="/services">Services</Link>
            <Link to="/process">How It Works</Link>
            <Link to="/results">Results</Link>
            <Link to="/ecosystem">Growth System</Link>
            <Link to="/about">About</Link>
            <Link to={CONTACT_PATH}>Contact</Link>
          </nav>

          <div>
            <p className="site-footer__meta">
              © {new Date().getFullYear()} Social 1st Marketing DBA Todd
              Marketing. All rights reserved.
            </p>

            <div className="site-footer__legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}