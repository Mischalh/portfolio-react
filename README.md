# Portfolio — Mischa Leijder Havenstroom

Persoonlijke portfoliosite, gebouwd met **React**, **React Router** en **Vite**.
Responsive van telefoon tot desktop, in de huisstijl "twee vierkanten" (paars, limoen, diep blauw).

## Snel starten

Je hebt [Node.js](https://nodejs.org) 20 of nieuwer nodig.

```bash
npm install      # eenmalig: haalt React, React Router en Vite op
npm run dev      # start de dev-server op http://localhost:5173
```

| Commando          | Wat het doet                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Dev-server met live herladen tijdens het werken                     |
| `npm run build`   | Maakt de productieversie in `dist/` (+ `404.html`, zie deployen)   |
| `npm run preview` | Bekijk de productieversie lokaal, precies zoals hij online komt    |

## Pagina's (routes)

| URL              | Pagina          | Bestand                       |
| ---------------- | --------------- | ----------------------------- |
| `/`              | Home            | `src/pages/Home.jsx`          |
| `/werk`          | Mijn werk       | `src/pages/Work.jsx`          |
| `/werk?filter=scrimba` | Mijn werk, gefilterd | (zelfde pagina)       |
| `/werk/:slug`    | Projectpagina   | `src/pages/ProjectDetail.jsx` |
| `/over-mij`      | Over mij        | `src/pages/About.jsx`         |
| `/contact`       | Contact         | `src/pages/Contact.jsx`       |
| alles anders     | 404             | `src/pages/NotFound.jsx`      |

## Mappenstructuur

```
portfolio-react/
├── index.html              ← het enige HTML-bestand; React vult <div id="root">
├── vite.config.js
├── public/                 ← bestanden die ongewijzigd online komen
│   ├── images/             ← logo, foto, certificaat
│   │   └── projects/       ← screenshots: <slug>-1.jpg is de cover
│   ├── certificaat-…pdf
│   └── CNAME               ← eigen domein voor GitHub Pages
├── docs/                   ← uitleg over keuzes, project toevoegen, deployen
└── src/
    ├── main.jsx            ← startpunt: koppelt de router aan React
    ├── router.jsx          ← alle routes op één plek
    ├── data/               ← alle inhoud (tekst, projecten, contact)
    ├── pages/              ← één bestand per pagina
    ├── components/         ← herbruikbare onderdelen
    ├── hooks/              ← eigen React-hooks
    └── styles/global.css   ← alle styling, met design tokens bovenaan
```

## Meer lezen

- [docs/BESLISSINGEN.md](docs/BESLISSINGEN.md): **waarom** alles zo gebouwd is (React Router, DRY, CSS, formulier).
- [docs/COMPONENTEN.md](docs/COMPONENTEN.md): wat elke component doet en waar hij gebruikt wordt.
- [docs/PROJECT-TOEVOEGEN.md](docs/PROJECT-TOEVOEGEN.md): een nieuw project of certificaat toevoegen.
- [docs/DEPLOYEN.md](docs/DEPLOYEN.md): online zetten op GitHub Pages met je eigen domein.
