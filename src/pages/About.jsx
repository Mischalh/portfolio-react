import { certificate, person, skillGroups, timeline } from '../data/site.js';
import PageHero from '../components/PageHero.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import DoubleSquare from '../components/DoubleSquare.jsx';

export default function About() {
  const certificateStats = [
    [certificate.hours, 'uur'],
    [certificate.lessons, 'lessen'],
    [certificate.completed, 'afgerond'],
  ];

  return (
    <>
      <title>Over mij — Mischa Leijder Havenstroom</title>

      <PageHero title="Over mij" intro="Passie voor techniek en design, gecombineerd in elk project." />

      <section className="section">
        <div className="container about">
          <figure className="card media-frame about__photo">
            <img src="/images/mischa.jpg" alt={`Portret van ${person.name}`} />
          </figure>
          <div className="about__text">
            <h2 className="section-title">Hoi, ik ben {person.name}.</h2>
            <p>
              Ik ben derdejaars CMD-student en richt me op frontend development. Websites bouwen die er goed uitzien
              én technisch goed werken: dat is wat mij drijft.
            </p>
            <p>
              Mijn technische skills heb ik voor een groot deel opgebouwd via Scrimba. Als ik iets niet weet, zoek ik
              het op. Als iets niet werkt, blijf ik proberen tot het wél werkt.
            </p>
            <p>
              Voordat ik ga coderen, werk ik mijn ontwerpen eerst uit in Figma. Dankzij mijn achtergrond in MBO
              Mediavormgeving begrijp ik design echt, niet alleen als developer die iets mooi wil maken.
            </p>
            <blockquote className="card card--purple quote">
              Frontend development is de richting waar ik naartoe wil. <span>Dit portfolio laat zien waar ik nu sta.</span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container stack">
          <h2 className="section-title">Mijn route</h2>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.title} className="timeline__item">
                <DoubleSquare variant="icon" />
                <p className="timeline__period">{item.period}</p>
                <h3 className="text-card__title">{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* id = anker voor de link vanaf de certificaat-banner op Home. */}
      <section id="certificaten" className="section">
        <div className="container stack">
          <div>
            <SectionLabel>Certificaten</SectionLabel>
            <h2 className="section-title">Wat ik buiten school heb behaald</h2>
          </div>
          <article className="card certificate">
            <div className="certificate__image">
              <img src={certificate.image} alt={`Certificaat ${certificate.title} van ${certificate.issuer}`} />
            </div>
            <div className="certificate__body">
              <span className="badge badge--scrimba">{certificate.issuer}</span>
              <h3 className="certificate__title">{certificate.title}</h3>
              <p>
                Het volledige frontend-traject van Scrimba: van HTML, CSS en JavaScript tot React, API's en het bouwen
                van echte apps. Twimba, MovieFinder en Quizzical maakte ik tijdens dit traject.
              </p>
              <dl className="stats">
                {certificateStats.map(([value, label]) => (
                  <div key={label} className="stats__item">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="button-row">
                <ButtonLink to={certificate.pdf} variant="purple">
                  Bekijk certificaat (PDF)
                </ButtonLink>
                <ButtonLink to="/werk?filter=scrimba" variant="outline">
                  Bekijk de Scrimba-projecten
                </ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container card-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="card skill-card">
              <SkillGroup {...group} />
            </div>
          ))}
          <ButtonLink to="/contact" variant="card">
            <span className="cta__title">Een vraag of idee? Laten we praten.</span>
            <span>Neem contact op →</span>
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
