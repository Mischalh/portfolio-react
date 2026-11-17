import { Link, useParams } from 'react-router';
import { getNextProject, getProject, imagePath, SOURCES } from '../data/projects.js';
import PageHero from '../components/PageHero.jsx';
import SourceBadge from '../components/SourceBadge.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import TagList from '../components/TagList.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import CallToAction from '../components/CallToAction.jsx';
import NotFound from './NotFound.jsx';

// Eén pagina-component voor álle projecten.
// Het slug-deel van de URL (/werk/kryst) bepaalt welk project uit de data getoond wordt.
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  // Een verkeerde URL (/werk/bestaat-niet) toont de 404-pagina.
  if (!project) return <NotFound />;

  const { title, subtitle, source, role, year, overview, challenge, solution, tools, liveUrl, images, steps } =
    project;
  const [cover, ...gallery] = images;
  const next = getNextProject(slug);
  const meta = [
    ['Rol', role],
    ['Jaar', year],
    ['Type', SOURCES[source].long],
  ];

  return (
    <>
      <title>{`${title} — Mijn werk`}</title>

      <PageHero title={title} intro={subtitle}>
        <Link to="/werk" className="back-link">
          ← Terug naar Mijn werk
        </Link>
        <SourceBadge source={source} long />
      </PageHero>

      <section className="section section--tight">
        <div className="container">
          <dl className="project-meta">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <figure className="card media-frame media-frame--cover">
            <img src={imagePath(cover)} alt={`Screenshot van ${title}`} />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container project-body">
          <div className="stack">
            <div>
              <SectionLabel>Overzicht</SectionLabel>
              <p className="lead">{overview}</p>
            </div>
            <div className="two-up">
              <div className="card text-card">
                <h2 className="text-card__title">De uitdaging</h2>
                <p>{challenge}</p>
              </div>
              <div className="card card--purple text-card">
                <h2 className="text-card__title">De oplossing</h2>
                <p>{solution}</p>
              </div>
            </div>
          </div>

          <aside className="card project-aside">
            <h2 className="text-card__title">Toegepaste skills</h2>
            <TagList tags={tools} />
            {liveUrl && (
              <ButtonLink to={liveUrl} variant="purple">
                Live bekijken ↗
              </ButtonLink>
            )}
          </aside>
        </div>
      </section>

      {/* Alleen projecten met een uitgeschreven werkwijze tonen deze sectie. */}
      {steps && (
        <section className="section section--flush-top">
          <div className="container stack">
            <SectionLabel>Werkwijze</SectionLabel>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title} className="card steps__item">
                  <span className="steps__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-card__title">{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="section section--flush-top">
          <div className="container stack">
            <SectionLabel>Beelden</SectionLabel>
            <div className="gallery">
              {gallery.map((file, index) => (
                <figure key={file} className="card media-frame">
                  <img src={imagePath(file)} alt={`${title}, afbeelding ${index + 2}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <CallToAction eyebrow="Volgend project" title={next.title} to={`/werk/${next.slug}`} buttonLabel="Bekijk project →" />
    </>
  );
}
