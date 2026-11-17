import ProjectCard from './ProjectCard.jsx';

// Raster van projectkaarten. Het CSS-grid past het aantal kolommen
// automatisch aan de schermbreedte aan (geen media queries nodig).
export default function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
