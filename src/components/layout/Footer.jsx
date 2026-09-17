import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_PATH } from '../../app/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__label">Todd Marketing</p>
            <h2>
              Growth infrastructure,
              <br />
              built to hold.
            </h2>
          </div>

          <Link className="site-footer__cta" to={CONTACT_PATH}>
            <span>Book a Growth Systems Audit</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="site-footer__bottom">
          <p>
            Florida-based growth infrastructure for businesses that need demand,
            conversion, CRM intelligence, and automation to work as one system.
          </p>

          <div className="site-footer__links">
            <Link to="/">Home</Link>
            <Link to="/ecosystem">Ecosystem</Link>
            <Link to={CONTACT_PATH}>Contact</Link>
          </div>

          <p className="site-footer__meta">
            © {new Date().getFullYear()} Todd Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}