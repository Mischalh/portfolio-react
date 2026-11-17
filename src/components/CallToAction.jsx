import ButtonLink from './ButtonLink.jsx';
import DoubleSquare from './DoubleSquare.jsx';

// Het grote paarse blok dat naar een volgende stap leidt.
// Home gebruikt het voor "Laten we er samen iets moois van maken",
// de projectpagina voor "Volgend project". Daarom zijn tekst en link props.
export default function CallToAction({ eyebrow, title, text, to, buttonLabel }) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta card card--purple">
          <div className="cta__text">
            {eyebrow && <p className="cta__eyebrow">{eyebrow}</p>}
            <h2 className="cta__title">{title}</h2>
            {text && <p className="cta__intro">{text}</p>}
            <ButtonLink to={to} variant="lime">
              {buttonLabel}
            </ButtonLink>
          </div>
          <DoubleSquare variant="small" />
        </div>
      </div>
    </section>
  );
}
