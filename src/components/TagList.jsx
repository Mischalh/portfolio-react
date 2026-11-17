// Een rij tags (skills, tools). `variant` wisselt tussen de omlijnde skill-tags
// en de rustigere tags op projectkaarten.
export default function TagList({ tags, variant = 'outline' }) {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li key={tag} className={`tag tag--${variant}`}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
