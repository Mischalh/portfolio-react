# Componenten

Alle herbruikbare onderdelen staan in `src/components/`.
Per component: wat het doet, de props, en waar hij gebruikt wordt.

## Structuur

| Component    | Wat                                                       | Gebruikt in          |
| ------------ | --------------------------------------------------------- | -------------------- |
| `Layout`     | Header + pagina (`<Outlet />`) + footer + scroll-herstel  | `router.jsx`         |
| `Header`     | Logo, menu, mobiel uitklapmenu                            | `Layout`             |
| `Footer`     | Logo, pagina-links, contactgegevens                       | `Layout`             |

## Bouwstenen

| Component           | Props                                      | Gebruikt in                                  |
| ------------------- | ------------------------------------------ | -------------------------------------------- |
| `Logo`              | `className`                                | Header, Footer                               |
| `DoubleSquare`      | `variant`: `large` · `small` · `icon`      | Home, PageHero, CallToAction, SectionLabel, Over mij |
| `SectionLabel`      | `children` (tekst)                         | Home, Over mij, ProjectDetail                |
| `ButtonLink`        | `to`, `variant`, `children`                | bijna overal                                 |
| `TagList`           | `tags`, `variant`: `outline` · `soft`      | SkillGroup, ProjectCard, ProjectDetail       |
| `SourceBadge`       | `source`, `long`                           | ProjectCard, ProjectDetail                   |
| `ContactLinks`      | `className`, `withPhone`                   | Home (hero), Footer                          |
| `SkillGroup`        | `title`, `items`                           | Home, Over mij                               |

## Secties

| Component           | Props                                               | Gebruikt in                         |
| ------------------- | --------------------------------------------------- | ----------------------------------- |
| `PageHero`          | `title`, `intro`, `children` (extra boven de titel) | Werk, Over mij, Contact, Project, 404 |
| `ProjectCard`       | `project`                                           | ProjectGrid                         |
| `ProjectGrid`       | `projects`                                          | Home, Mijn werk                     |
| `CertificateBanner` | geen                                                | Home                                |
| `CallToAction`      | `eyebrow`, `title`, `text`, `to`, `buttonLabel`     | Home, ProjectDetail                 |

## `ButtonLink`-varianten

| `variant`       | Uiterlijk                                   |
| --------------- | ------------------------------------------- |
| `purple`        | paars vlak, limoen schaduw (standaard)      |
| `lime`          | limoen vlak, op een paarse achtergrond      |
| `outline`       | donkere rand, op een lichte achtergrond     |
| `outline-light` | witte rand, op een paarse achtergrond       |
| `text`          | alleen tekst                                |
| `card`          | een hele paarse kaart als link              |

Een `to` die begint met `http`, `mailto:` of `tel:`, of die eindigt op `.pdf`,
wordt een gewone `<a>` die in een nieuw tabblad opent. Alles anders wordt een
React Router `<Link>`.

## Hook

| Hook              | Wat                                                          |
| ----------------- | ------------------------------------------------------------ |
| `useScrollToHash` | Scrollt naar `#anker` in de URL (bijv. `/over-mij#certificaten`) |
