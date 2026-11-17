import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router.jsx';
import './styles/global.css';

// Startpunt van de app: hier wordt de router aan React gekoppeld.
// StrictMode waarschuwt tijdens development voor fouten; in productie doet het niets.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
