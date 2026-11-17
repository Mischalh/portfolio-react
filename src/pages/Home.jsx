import { person, skillGroups } from '../data/site.js';
import { featuredProjects } from '../data/projects.js';
import ButtonLink from '../components/ButtonLink.jsx';
import ContactLinks from '../components/ContactLinks.jsx';
import DoubleSquare from '../components/DoubleSquare.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import CertificateBanner from '../components/CertificateBanner.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import ProjectGrid from '../components/ProjectGrid.jsx';
import CallToAction from '../components/CallToAction.jsx';

export default function Home() {
  return (
    <>
      {/* React 19 zet <title> automatisch in de <head>: geen extra library nodig. */}
      <title>{`${person.name} — ${person.role}`}</title>

      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1 className="hero__title">
              Mischa
              <br />
              Leijder Havenstroom.
            </h1>
            <p className="hero__intro">
              <strong>{person.role}.</strong> Ik ontwerp eerst in Figma en bouw het daarna pixel-perfect in code.
            </p>
            <div className="button-row">
              <ButtonLink to="/werk" variant="lime">
                Bekijk mijn werk →
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline-light">
                Neem contact op
              </ButtonLink>
            </div>
            <ContactLinks className="hero__contact" />
          </div>
          <DoubleSquare />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="card skills-strip">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
            <div className="skill-group">
              <h3 className="eyebrow">Werkwijze</h3>
              <p>Eerst ontwerp, dan code. Lay-out, kleur en typografie staan vast voordat ik begin met bouwen.</p>
            </div>
          </div>
        </div>
      </section>

      <CertificateBanner />

      <section className="section">
        <div className="container stack">
          <div className="section-head">
            <div>
              <SectionLabel>Uitgelicht werk</SectionLabel>
              <h2 className="section-title">Recente projecten</h2>
            </div>
            <ButtonLink to="/werk" variant="text">
              Alle projecten →
            </ButtonLink>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      <CallToAction
        title="Laten we er samen iets moois van maken"
        text="Heb je een vraag, opdracht of wil je gewoon even kennismaken?"
        to="/contact"
        buttonLabel="Neem contact op"
      />
    </>
  );
}
