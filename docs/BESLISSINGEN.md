# Waarom is het zo gebouwd?

Per onderwerp: de keuze, en waarom.

## 1. Vite in plaats van Create React App

Vite start in een paar honderd milliseconden en ververst direct bij elke wijziging.
Create React App wordt niet meer onderhouden. De hele build-configuratie is
`vite.config.js` van een paar regels.

## 2. Maar drie dependencies

`react`, `react-dom` en `react-router`, plus Vite om te bouwen. Geen UI-library,
geen CSS-framework, geen library voor paginatitels.

- **Waarom:** elke dependency is code die je moet begrijpen, updaten en meeslepen.
  Voor deze site was alles met React zelf te doen.
- **Paginatitels:** React 19 zet een `<title>` uit een component automatisch in de
  `<head>`. Daarom staat er bovenaan elke pagina gewoon `<title>…</title>`.

## 3. React Router

### `createBrowserRouter` + één Layout-route (`src/router.jsx`)
- Alle routes staan in één lijst, dus je ziet in één oogopslag welke pagina's er zijn.
- De `Layout`-route bevat de header en footer **één keer**. Elke pagina wordt via
  `<Outlet />` daartussen getoond. Zonder dit zou elke pagina zelf header en footer
  moeten importeren.
- `createBrowserRouter` (in plaats van `<BrowserRouter>`) is nodig voor
  `<ScrollRestoration />`: zo begint elke nieuwe pagina bovenaan, en brengt "vorige"
  je terug naar waar je was.

### Eén projectpagina voor alle projecten (`/werk/:slug`)
`ProjectDetail.jsx` leest het `slug`-deel uit de URL met `useParams()` en zoekt het
project op in `data/projects.js`. Acht projecten = één component, geen acht pagina's.
Een slug die niet bestaat toont de 404-pagina.

### Filter in de URL (`/werk?filter=scrimba`)
De filter op Mijn werk gebruikt `useSearchParams()` in plaats van `useState`.
- Je kunt een gefilterde lijst delen of bookmarken.
- Vanaf een projectpagina op "terug" klikken brengt je bij dezelfde filter.
- De link "Bekijk de Scrimba-projecten" op Over mij kan direct naar de gefilterde lijst.

### `NavLink` in de header
`NavLink` geeft de link van de huidige pagina automatisch de class `active`.
Daardoor is er geen eigen code nodig om het actieve menu-item te kleuren.
`end` op Home zorgt dat Home alleen actief is op `/`.

### `useScrollToHash` (`src/hooks/`)
React Router scrollt naar boven, maar niet naar een anker zoals `#certificaten`.
Deze kleine hook doet dat wel, zodat de certificaat-banner op Home direct naar de
juiste sectie op Over mij springt.

## 4. DRY: inhoud als data, opmaak als componenten

**DRY** = *Don't Repeat Yourself*: elk stukje informatie staat op één plek.

| Wat                              | Staat één keer in            | Gebruikt door                         |
| -------------------------------- | ---------------------------- | ------------------------------------- |
| E-mail, telefoon, socials        | `data/site.js`               | hero, footer, contact                 |
| Menu-items                       | `data/site.js` (`navLinks`)  | header én footer                      |
| Skills                           | `data/site.js`               | Home en Over mij                      |
| Projecten                        | `data/projects.js`           | Home, Mijn werk, projectpagina's      |
| "Scrimba"/"School"-labels        | `SOURCES` in `projects.js`   | filterknoppen, badges, projectpagina  |
| De twee vierkanten               | `DoubleSquare.jsx`           | hero, koppen, CTA, iconen, tijdlijn   |
| Kaartstijl (rand + limoen vlak)  | `.card` in CSS               | alle kaarten                          |

Voorbeelden van herhaling die zo is weggehaald:
- **Formulier:** de drie velden staan als lijst in `Contact.jsx` en worden met één
  stukje JSX getekend, in plaats van drie keer label + input.
- **Knoppen:** `ButtonLink` kiest zelf tussen `<Link>` (interne pagina) en `<a>`
  (externe site of PDF). Pagina's hoeven dat niet te weten.
- **Kaartjes en sectiekoppen** zijn componenten (`ProjectCard`, `SectionLabel`,
  `PageHero`, `CallToAction`), dus de opmaak staat er maar één keer in.
- **De filterknoppen** worden gemaakt uit `SOURCES`. Voeg je een bron toe, dan
  verschijnt de knop vanzelf.

Wat **niet** in een component is gestopt: stukken die maar op één plek staan
(zoals de tekst op Over mij). Een component voor iets dat één keer voorkomt,
maakt de code alleen moeilijker te volgen.

## 5. Styling: één CSS-bestand met tokens

- **Design tokens** (`:root` bovenaan `global.css`): alle kleuren, fonts en vaste maten
  als CSS-variabelen. Wil je de paarse tint aanpassen, dan doe je dat op één regel.
- **Gedeelde classes** (`.card`, `.btn`, `.tag`, `.badge`): de huisstijl staat één keer
  in de CSS, en componenten combineren die classes.
- **Waarom geen Tailwind of CSS Modules:** voor een site van deze grootte is één
  overzichtelijk bestand, opgedeeld in genummerde blokken, het makkelijkst te volgen.
- **Responsive zonder veel media queries:** rasters gebruiken
  `repeat(auto-fit, minmax(…))` en rijen gebruiken `flex-wrap`. Ze passen zich vanzelf
  aan de schermbreedte aan. Er zijn maar twee media queries voor schermbreedte: het mobiele menu, en de
  decoratie op kleine schermen.
- **De vierkanten** zijn één SVG. Kleur en lijndikte komen uit de CSS
  (`.double-square--icon` enz.), zodat dezelfde vorm groot én als klein icoon werkt.

## 6. Het contactformulier gebruikt `mailto`

De site draait op GitHub Pages: daar is geen server die een formulier kan versturen.
Een knop "Verstuur" die niets verstuurt zou misleidend zijn. Daarom opent het formulier
het mailprogramma van de bezoeker, met onderwerp en bericht al ingevuld.

- **Geen e-mailveld:** de mail komt uit het mailprogramma van de bezoeker, dus hun
  adres heb je al.
- **Later echt versturen?** Vervang `handleSubmit` in `Contact.jsx` door een dienst als
  Formspree. De rest van het formulier blijft hetzelfde.

## 7. Toegankelijkheid

- Echte `<button>`, `<a>`, `<label>` en `<input>`, dus alles werkt met het toetsenbord.
- Het menu-knopje heeft `aria-expanded` en een `aria-label`, en de filterknoppen hebben
  `aria-pressed`. Zo hoort ook een schermlezer wat er aan of uit staat.
- Decoratieve vierkanten hebben `aria-hidden`.
- Een duidelijke focusrand (`:focus-visible`) in limoen.
- Wie "minder beweging" heeft ingesteld, krijgt geen knop-animatie.

## 8. Afbeeldingen in `public/`

Afbeeldingen staan in `public/images/` en worden met een gewoon pad gebruikt
(`/images/…`). Projectfoto's heten `<slug>-1.jpg`, `<slug>-2.jpg`, enzovoort.
Het eerste plaatje is altijd de cover. Zo hoef je in `projects.js` alleen de
bestandsnamen te noemen, zonder `import` per afbeelding.
