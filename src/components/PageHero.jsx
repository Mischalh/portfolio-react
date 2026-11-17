import DoubleSquare from './DoubleSquare.jsx';

// De paarse kop bovenaan Mijn werk, Over mij, Contact en de projectpagina's.
// `children` is optioneel: de projectpagina zet er extra info in (terug-link, meta).
export default function PageHero({ title, intro, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="page-hero__text">
          {children}
          <h1 className="page-hero__title">{title}</h1>
          {intro && <p className="page-hero__intro">{intro}</p>}
        </div>
        <DoubleSquare variant="small" />
      </div>
    </section>
  );
}
