import { Link } from 'react-router';
import { navLinks, person } from '../data/site.js';
import Logo from './Logo.jsx';
import ContactLinks from './ContactLinks.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__intro">
          <Logo className="logo logo--small" />
          <p>{person.role} met een passie voor design en techniek.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="site-footer__title">Pagina's</h2>
          <ul className="site-footer__list">
            {/* Dezelfde lijst als de header, plus Contact: geen dubbele menu-data. */}
            {[...navLinks, { to: '/contact', label: 'Contact' }].map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__title">Contact</h2>
          <ContactLinks className="site-footer__list" withPhone />
        </div>
      </div>
      <p className="container site-footer__copy">
        © {new Date().getFullYear()} {person.name}. Alle rechten voorbehouden.
      </p>
    </footer>
  );
}
