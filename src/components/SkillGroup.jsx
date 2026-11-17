import TagList from './TagList.jsx';

// Titel + tags van één skill-groep. Home en Over mij gebruiken dezelfde data
// (skillGroups in site.js); alleen de omlijsting om deze component verschilt.
export default function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3 className="eyebrow">{title}</h3>
      <TagList tags={items} />
    </div>
  );
}
