import { Link } from 'react-router-dom';
import BrandLogo from '../brand/BrandLogo';
import { CONTACT_PATH } from '../../app/siteConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link className="footer__brand" to="/" aria-label="Todd Marketing home">
          <BrandLogo />
        </Link>

        <div className="footer__content">
          <div>
            <p className="footer__eyebrow">Growth infrastructure for service businesses</p>

            <p className="footer__location">
              Wisconsin-originated. Serving clients across the United States.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <Link to="/ecosystem">Ecosystem</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/results">Results</Link>
            <Link to="/about">About</Link>
            <Link to={CONTACT_PATH}>Contact</Link>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Social 1st Marketing DBA Todd Marketing.
            All rights reserved.
          </p>

          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}