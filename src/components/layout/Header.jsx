import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { CONTACT_PATH, navItems } from '../../app/siteConfig';
import Button from '../ui/Button';

export default function Header({ darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header ${
        darkMode ? 'site-header--dark' : 'site-header--light'
      }`}
    >
      <div className="site-header__inner container">
        <Link className="brand-lockup" to="/" aria-label="Todd Marketing home">
          <img
            src="/brand/todd-marketing-logo-white.svg"
            alt="Todd Marketing"
          />
        </Link>

        <div className="site-header__actions">
          <Button to={CONTACT_PATH} variant="header">
            Book a Growth Systems Audit
          </Button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-controls="site-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        className={`menu-overlay ${menuOpen ? 'menu-overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-overlay__grid" aria-hidden="true" />

        <div className="menu-overlay__inner container">
          <p className="menu-overlay__eyebrow">
            Todd Marketing / Navigate
          </p>

          <nav className="menu-overlay__links" aria-label="Mobile navigation">
            {navItems.map((item, index) => {
              if (item.disabled) {
                return (
                  <span
                    className="menu-overlay__link menu-overlay__link--disabled"
                    key={item.label}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                    <small>Building next</small>
                  </span>
                );
              }

              return (
                <NavLink
                  className="menu-overlay__link"
                  end={item.to === '/'}
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                  <ArrowUpRight size={22} aria-hidden="true" />
                </NavLink>
              );
            })}
          </nav>

          <div className="menu-overlay__footer">
            <p>Florida-based / Serving businesses nationwide</p>

            <Button to={CONTACT_PATH} onClick={() => setMenuOpen(false)}>
              Book a Growth Systems Audit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}