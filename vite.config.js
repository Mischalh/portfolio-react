import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite: snelle dev-server en een kleine productie-build.
// `base: '/'` omdat de site op een eigen domein draait (mischaleijder.nl),
// niet in een submap zoals gebruiker.github.io/repo-naam.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
