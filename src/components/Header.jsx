import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { navLinks } from '../data/site.js';
import Logo from './Logo.jsx';

// Navigatie met een uitklapmenu op mobiel.
// Waarom NavLink: die geeft automatisch de class "active" aan de huidige pagina,
// dus geen eigen logica nodig om het actieve menu-item te kleuren.
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Hoofdmenu">
        <Link to="/" onClick={closeMenu} aria-label="Naar home">
          <Logo />
        </Link>

        {/* Alleen zichtbaar op kleine schermen (zie CSS). */}
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="hoofdmenu"
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        <ul id="hoofdmenu" className={`nav__links${menuOpen ? ' is-open' : ''}`}>
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className="nav__link" onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contact" className="btn btn--lime nav__cta" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
