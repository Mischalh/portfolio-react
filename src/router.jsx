import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

// Alle routes op één plek.
// Waarom createBrowserRouter (en niet <BrowserRouter>): hiermee werkt
// <ScrollRestoration /> in de Layout, zodat elke nieuwe pagina bovenaan begint.
// Waarom één Layout-route met children: header en footer staan er maar één keer
// in de code; <Outlet /> in de Layout toont de pagina die bij de URL hoort.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'werk', element: <Work /> },
      // :slug is het stukje uit de URL, bijvoorbeeld /werk/kryst → slug = "kryst".
      { path: 'werk/:slug', element: <ProjectDetail /> },
      { path: 'over-mij', element: <About /> },
      { path: 'contact', element: <Contact /> },
      // Elke onbekende URL komt hier terecht.
      { path: '*', element: <NotFound /> },
    ],
  },
]);
