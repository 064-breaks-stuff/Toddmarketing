import { Link } from 'react-router-dom';
import { CONTACT_PATH } from '../../app/siteConfig';
import '../../styles/footer.css';

export default function Footer({ showGrowthCta = true }) {
  return (
    <footer
      className={`site-footer site-footer--refined${
        showGrowthCta ? '' : ' site-footer--without-growth-cta'
      }`}
    >
      <div className="container">
        {showGrowthCta && (
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
              <span>Book a Growth Infrastructure Audit</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}

        <div className="site-footer__bottom">
          <div className="site-footer__identity">
            <Link
              className="site-footer__brand"
              to="/"
              aria-label="Todd Marketing home"
            >
              <img
                src="/brand/todd-marketing-logo-white.svg"
                alt="Todd Marketing"
              />
            </Link>

            <p className="site-footer__location">
              Wisconsin-originated. Serving clients across the United States.
            </p>

                        <a
              className="site-footer__map-link"
              href="https://share.google/RYwUVNS8hgC4Q4o31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Todd Marketing on Google Maps (opens in a new tab)"
            >
              <span>View on Google Maps</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <nav className="site-footer__links" aria-label="Footer navigation">
            <Link to="/services">Services</Link>
            <Link to="/process">How It Works</Link>
            <Link to="/results">Results</Link>
            <Link to="/ecosystem">Growth System</Link>
            <Link to="/about">About</Link>
            <Link to={CONTACT_PATH}>Contact</Link>
          </nav>
        </div>

        <div className="site-footer__base">
          <p className="site-footer__meta">
            © {new Date().getFullYear()} Social 1st Marketing DBA Todd
            Marketing. All rights reserved.
          </p>

          <nav className="site-footer__legal" aria-label="Legal navigation">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}