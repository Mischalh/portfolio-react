// Alle persoonlijke gegevens op één plek.
// Waarom: e-mail, telefoon en socials komen op meerdere pagina's terug
// (hero, footer, contact). Pas je iets aan, dan doe je dat hier één keer.

export const person = {
  name: 'Mischa Leijder Havenstroom',
  role: 'Frontend developer & designer',
  email: 'mischalhavenstroom@gmail.com',
  phone: '0651090674',
  phoneDisplay: '06 51 09 06 74',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://nl.linkedin.com/in/mischa-leider-havenstroom-35ab63264' },
  { label: 'GitHub', href: 'https://github.com/Mischalh' },
];

// De menu-items. `end: true` zorgt dat "Home" alleen actief is op "/" en niet op elke pagina.
export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/werk', label: 'Mijn werk' },
  { to: '/over-mij', label: 'Over mij' },
];

export const skillGroups = [
  { title: 'Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Git'] },
  { title: 'Design', items: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'] },
];

export const timeline = [
  {
    period: '2020 – 2024',
    title: 'MBO Mediavormgeving',
    text: 'Illustrator, Photoshop en InDesign. Hier leerde ik denken als ontwerper.',
  },
  {
    period: '2024 – nu',
    title: 'CMD — 3e jaar',
    text: 'Focus op frontend development: HTML, CSS, JavaScript en React.',
  },
  {
    period: '2026',
    title: 'Scrimba Frontend Developer Path',
    text: 'Naast school het volledige frontend-traject afgerond, met projecten als Twimba, MovieFinder en Quizzical.',
  },
];

export const certificate = {
  title: 'The Frontend Developer Path',
  issuer: 'Scrimba',
  hours: '81,6',
  lessons: '1.494',
  completed: '16-11-2026',
  image: '/images/certificaat-scrimba.jpg',
  pdf: '/certificaat-scrimba-frontend-developer-path.pdf',
};
