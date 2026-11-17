import { Link } from 'react-router';
import { imagePath } from '../data/projects.js';
import SourceBadge from './SourceBadge.jsx';
import TagList from './TagList.jsx';

// Eén projectkaart. Gebruikt op Home én Mijn werk.
export default function ProjectCard({ project }) {
  const { slug, source, title, type, summary, tools, images } = project;

  return (
    <article className="card project-card">
      <div className="project-card__media">
        <img src={imagePath(images[0])} alt={`Screenshot van ${title}`} loading="lazy" />
        <SourceBadge source={source} />
      </div>
      <div className="project-card__body">
        <p className="eyebrow">{type}</p>
        <h3 className="project-card__title">{title}</h3>
        <p>{summary}</p>
        {/* Op de kaart maximaal 3 tags; de detailpagina toont ze allemaal. */}
        <TagList tags={tools.slice(0, 3)} variant="soft" />
        <Link to={`/werk/${slug}`} className="btn btn--purple project-card__link">
          Bekijk project →
        </Link>
      </div>
    </article>
  );
}
