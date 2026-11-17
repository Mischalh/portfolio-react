import { Outlet, ScrollRestoration } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useScrollToHash } from '../hooks/useScrollToHash.js';

// De vaste "schil" om elke pagina: header, de pagina zelf (<Outlet />) en footer.
export default function Layout() {
  useScrollToHash();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Zet de scrollpositie bovenaan bij een nieuwe pagina, en terug bij "vorige". */}
      <ScrollRestoration />
    </>
  );
}
