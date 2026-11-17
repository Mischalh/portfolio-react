import { Link } from 'react-router';
import { certificate } from '../data/site.js';

// Korte vermelding van het certificaat op Home.
// Linkt naar de volledige sectie op Over mij (via #certificaten).
export default function CertificateBanner() {
  const { title, issuer, hours, lessons, image } = certificate;

  return (
    <section className="section section--tight">
      <div className="container">
        <Link to="/over-mij#certificaten" className="card certificate-banner">
          <img src={image} alt="" className="certificate-banner__image" />
          <span className="certificate-banner__text">
            <span className="cta__eyebrow">Gecertificeerd</span>
            <strong className="certificate-banner__title">
              {title} — {issuer}
            </strong>
            <span>
              {hours} uur · {lessons} lessen
            </span>
          </span>
          <span className="btn btn--lime">Bekijk certificaat →</span>
        </Link>
      </div>
    </section>
  );
}
