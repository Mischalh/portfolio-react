// Alle projecten als data, niet als losse pagina's.
// Waarom: één ProjectDetail-pagina leest het juiste project uit deze lijst
// (via de URL /werk/:slug). Een nieuw project toevoegen = één object erbij,
// geen nieuwe component of route.

// Labels per bron. Gebruikt door de filter, de kaart-badge en de detailpagina.
export const SOURCES = {
  scrimba: { label: 'Scrimba', long: 'Scrimba-project', filter: 'Scrimba-projecten' },
  school: { label: 'School', long: 'Schoolproject', filter: 'Schoolprojecten' },
};

export const projects = [
  {
    slug: 'twimba',
    source: 'scrimba',
    title: 'Twimba',
    type: 'JavaScript app',
    subtitle: 'Twitter-kloon in JavaScript',
    summary: 'Een Twitter-kloon in vanilla JavaScript: tweets plaatsen, liken en retweeten.',
    overview:
      'Twimba is een Twitter-kloon die ik bouwde tijdens het Scrimba Frontend Developer Path. Je plaatst een tweet en reageert op tweets in de feed.',
    challenge:
      'Een interactieve feed bouwen zonder framework: tweets, likes en retweets moeten direct op de pagina worden bijgewerkt.',
    solution:
      'De feed wordt opgebouwd vanuit een data-array en opnieuw gerenderd na elke actie. Met event delegation luistert één event listener naar alle knoppen in de feed.',
    role: 'Frontend developer',
    year: '2026',
    tools: ['JavaScript', 'DOM', 'CSS', 'HTML'],
    liveUrl: 'https://imaginative-blini-7f6e40.netlify.app/',
    images: ['twimba-1.jpg', 'twimba-2.jpg'],
  },
  {
    slug: 'moviefinder',
    source: 'scrimba',
    title: 'MovieFinder',
    type: 'JavaScript app',
    subtitle: 'Films zoeken met een API',
    summary: 'Zoek films via een film-API en bewaar je favorieten in een eigen watchlist.',
    overview:
      'MovieFinder is een filmzoeker: zoek op titel, bekijk de resultaten en bewaar films in je eigen watchlist.',
    challenge:
      'Data ophalen uit een externe film-API en die netjes tonen, ook als er niets gevonden wordt of de verbinding wegvalt.',
    solution:
      'Met fetch en async/await worden de zoekresultaten opgehaald en als kaarten getoond. De watchlist wordt in de browser bewaard, zodat je lijst blijft staan.',
    role: 'Frontend developer',
    year: '2026',
    tools: ['JavaScript', 'API', 'Fetch', 'Async/await'],
    liveUrl: 'https://rad-gumption-059b37.netlify.app/',
    images: ['moviefinder-1.jpg', 'moviefinder-2.jpg'],
    featured: true,
  },
  {
    slug: 'quizzical',
    source: 'scrimba',
    title: 'Quizzical',
    type: 'React app',
    subtitle: 'Quiz-app in React',
    summary: 'Een quiz-app in React met vragen uit een API. Na afloop zie je direct je score.',
    overview:
      'Quizzical is een quiz-app gebouwd in React. Je start een quiz, beantwoordt meerkeuzevragen en ziet aan het eind hoeveel je goed had.',
    challenge: 'Vragen uit een API laden, de antwoorden husselen en per vraag bijhouden wat de gebruiker kiest.',
    solution:
      'Met React state en useEffect worden de vragen opgehaald en bijgehouden. Na het controleren kleuren de antwoorden goed of fout en kun je een nieuwe ronde starten.',
    role: 'Frontend developer',
    year: '2026',
    tools: ['React', 'Hooks', 'API'],
    liveUrl: 'https://soft-pastelito-7e1761.netlify.app/',
    images: ['quizzical-1.jpg', 'quizzical-2.jpg'],
    featured: true,
  },
  {
    slug: 'kryst',
    source: 'school',
    title: 'Kryst',
    type: 'WordPress website',
    subtitle: 'WordPress website voor Kryst BV',
    summary:
      'Custom WordPress-theme voor Kryst BV, een startup in christelijke kerstverlichting. Ontwerp door groepsgenoot Linda, gebouwd door mij.',
    overview:
      'Een volledige WordPress-website voor Kryst BV, een startup die betekenisvolle christelijke kerstverlichting verkoopt. Ontworpen in Figma door groepsgenoot Linda en door mij gebouwd als custom WordPress-theme vanuit VSCode, lokaal gehost via Local.',
    challenge:
      'Een authentieke christelijke identiteit vertalen naar een moderne webshop die vertrouwen opbouwt voor een pre-order model, zonder niche over te komen. Tegelijk moest het Figma-ontwerp pixel-perfect worden gebouwd als functioneel WordPress-theme.',
    solution:
      'Een custom WordPress-theme geschreven in VSCode met PHP-templates, eigen CSS en een lokale dev-omgeving via Local. Het design sluit aan op het Figma-ontwerp en volgt de design principles van het project: transparantie, rustige vormgeving, eerlijke productpresentatie en social proof.',
    role: 'Frontend developer & designer',
    year: '2025',
    tools: ['WordPress', 'PHP', 'HTML & CSS', 'Custom theme', 'Figma', 'Local'],
    images: ['kryst-1.jpg', 'kryst-2.jpg', 'kryst-3.jpg', 'kryst-4.jpg'],
    steps: [
      { title: 'Figma-ontwerp analyseren', text: 'Kleuren, componenten, typografie en breakpoints in kaart gebracht voordat ik code schreef.' },
      { title: 'Custom theme opzetten', text: 'Theme-structuur opgezet in VSCode: style.css, functions.php, index.php en losse page templates.' },
      { title: 'Lokaal ontwikkelen met Local', text: 'Een lokale WordPress-omgeving via Local, zodat ik snel kon itereren zonder hosting.' },
      { title: 'Pre-order & content', text: 'Producten aangemaakt in WooCommerce, pre-order logica ingesteld en content toegevoegd.' },
    ],
    featured: true,
  },
  {
    slug: 'schippers-kuilman',
    source: 'school',
    title: 'Schippers & Kuilman',
    type: 'Website redesign',
    subtitle: 'Website redesign',
    summary: 'Moderne redesign met de focus op het helder presenteren van hun diensten en een sterke visuele hiërarchie.',
    overview:
      'Een moderne website-redesign voor Schippers & Kuilman, met de focus op het helder presenteren van hun diensten. Clean design met een sterke visuele hiërarchie.',
    challenge: 'Een gedateerde website moderniseren terwijl de professionele, vakkundige uitstraling behouden blijft.',
    solution:
      'Een complete redesign met moderne designprincipes, een betere contentstructuur en sterke fotografie. De diensten en expertise staan duidelijk voorop.',
    role: 'Frontend developer & designer',
    year: '2024',
    tools: ['Webdesign', 'HTML', 'CSS', 'Redesign'],
    images: ['schippers-1.jpg', 'schippers-2.jpg', 'schippers-3.jpg'],
  },
  {
    slug: 'kieskoers',
    source: 'school',
    title: 'KiesKoers',
    type: 'Website redesign',
    subtitle: 'Website redesign',
    summary: 'Toegankelijke website voor KiesKoers, dat studenten helpt bij het kiezen van de juiste studierichting.',
    overview:
      'Een moderne, toegankelijke website voor KiesKoers, een organisatie die studenten helpt bij het kiezen van de juiste studierichting. Het ontwerp richt zich op duidelijkheid en gebruiksvriendelijkheid.',
    challenge:
      'Studenten hadden moeite met het vinden van de juiste informatie over studiebegeleiding. De oude website was onoverzichtelijk en niet mobielvriendelijk.',
    solution:
      'Een compleet herontwerp met een duidelijke informatiestructuur, moderne visuele hiërarchie en volledige mobile responsiveness, met interactieve elementen die gebruikers begeleiden.',
    role: 'Frontend designer',
    year: '2024',
    tools: ['Webdesign', 'UX design', 'Redesign'],
    images: ['kieskoers-1.jpg', 'kieskoers-2.jpg', 'kieskoers-3.jpg'],
  },
  {
    slug: 'bikevoordeel',
    source: 'school',
    title: 'Bikevoordeel',
    type: 'Logo & webdesign',
    subtitle: 'Logo & webdesign',
    summary: 'Frisse interpretatie van een fietsenlease-platform: van logo-ontwerp tot volledige website-mockups.',
    overview:
      'Een frisse interpretatie van een fietsenlease-platform. Van logo-ontwerp tot volledige website-mockups, met een moderne, sportieve uitstraling die past bij een actieve levensstijl.',
    challenge:
      'Een herkenbare merkidentiteit creëren voor een fietsenlease-platform dat zich moet onderscheiden in een competitieve markt.',
    solution:
      'Een complete visuele identiteit met logo, kleurenpalet en websitedesign. De designs communiceren dynamiek, beweging en een actieve lifestyle.',
    role: 'Designer & frontend design',
    year: '2025',
    tools: ['Logo design', 'Webdesign', 'UI/UX', 'Branding'],
    images: ['bikevoordeel-1.jpg', 'bikevoordeel-2.jpg', 'bikevoordeel-3.jpg'],
  },
  {
    slug: 'klusbus',
    source: 'school',
    title: 'Klusbus Eindhoven',
    type: 'Huisstijl',
    subtitle: 'Huisstijl',
    summary: 'Complete huisstijl voor een mobiele klusservice: logovariaties, typografie en kleurenpalet.',
    overview:
      'Een compleet huisstijlontwerp voor Klusbus Eindhoven, een mobiele klusservice. Van logovariaties tot merkrichtlijnen, met de focus op herkenbaarheid en professionaliteit.',
    challenge: 'Een professionele huisstijl ontwerpen die de mobiliteit en betrouwbaarheid van de klusservice uitstraalt.',
    solution:
      'Verschillende logovariaties, een typografiesysteem en een kleurenpalet. De huisstijl is flexibel genoeg voor alles van bedrijfsbussen tot marketingmateriaal.',
    role: 'Graphic designer',
    year: '2024',
    tools: ['Huisstijl', 'Logo design', 'Illustrator', 'Branding'],
    images: ['klusbus-1.jpg', 'klusbus-2.jpg', 'klusbus-3.jpg'],
  },
];

// Kleine helpers, zodat pagina's geen zoek-logica herhalen.
export const imagePath = (file) => `/images/projects/${file}`;

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug) => projects.find((project) => project.slug === slug);

// Volgend project; na het laatste begint het weer bij het eerste.
export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
