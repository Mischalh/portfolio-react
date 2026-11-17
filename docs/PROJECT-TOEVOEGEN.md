# Een project toevoegen

Je hoeft geen nieuwe pagina of route te maken: alleen data en afbeeldingen.

## 1. Afbeeldingen

Zet screenshots in `public/images/projects/` met de slug als naam:

```
public/images/projects/mijn-project-1.jpg   ← cover (kaart + bovenaan de projectpagina)
public/images/projects/mijn-project-2.jpg   ← extra beelden onder "Beelden"
```

Tip: 1000×625 pixels (16:10) past het mooist op de kaarten.

## 2. Data

Voeg een object toe aan de lijst `projects` in `src/data/projects.js`:

```js
{
  slug: 'mijn-project',            // wordt de URL: /werk/mijn-project
  source: 'scrimba',               // 'scrimba' of 'school' (bepaalt filter + label)
  title: 'Mijn project',
  type: 'React app',               // klein label boven de titel op de kaart
  subtitle: 'Korte ondertitel',    // onder de titel op de projectpagina
  summary: 'Eén of twee zinnen voor op de kaart.',
  overview: 'Langere uitleg voor de projectpagina.',
  challenge: 'Wat was lastig?',
  solution: 'Hoe heb je het opgelost?',
  role: 'Frontend developer',
  year: '2026',
  tools: ['React', 'CSS'],         // de eerste 3 komen ook op de kaart
  liveUrl: 'https://…',            // optioneel: toont "Live bekijken"
  images: ['mijn-project-1.jpg', 'mijn-project-2.jpg'],
  steps: [{ title: '…', text: '…' }], // optioneel: toont "Werkwijze"
  featured: true,                  // optioneel: ook tonen op Home
},
```

Klaar. Het project verschijnt op Mijn werk, in de juiste filter, met een eigen pagina
en in de "Volgend project"-rij.

## Een nieuwe bron (bijv. "Freelance")

Voeg die toe aan `SOURCES` in `projects.js`:

```js
freelance: { label: 'Freelance', long: 'Freelance-project', filter: 'Freelance' },
```

Geef de badge een kleur in `global.css` (`.badge--freelance { … }`).
De filterknop verschijnt vanzelf.

## Een certificaat aanpassen

Het certificaat staat in `certificate` in `src/data/site.js`. De afbeelding en de PDF
staan in `public/`.
