# Online zetten (GitHub Pages)

De site is klaar voor GitHub Pages met het eigen domein **mischaleijder.nl**
(`public/CNAME` wordt automatisch meegenomen in de build).

## Het 404-probleem en de oplossing

React Router regelt pagina's in de browser. GitHub Pages kent alleen echte bestanden:
als iemand direct naar `mischaleijder.nl/werk/kryst` gaat, bestaat dat bestand niet,
en geeft GitHub een 404.

**Oplossing:** `npm run build` kopieert `index.html` ook naar `404.html`. GitHub Pages
toont bij een onbekend pad `404.html`, dus laadt de app alsnog, en React Router toont
de juiste pagina. Echt onbekende URL's tonen de eigen 404-pagina van de site.

## Hoe het live gaat

Bij elke push naar `main` draait `.github/workflows/deploy.yml`:

1. GitHub installeert de dependencies (`npm ci`).
2. Bouwt de site (`npm run build`, inclusief `404.html`).
3. Zet de map `dist/` live op GitHub Pages.

Eenmalig in de repo: *Settings → Pages → Source* op **GitHub Actions**, en onder
*Custom domain* `mischaleijder.nl` invullen, met *Enforce HTTPS* aan.

Altijd eerst lokaal controleren met `npm run preview`.
