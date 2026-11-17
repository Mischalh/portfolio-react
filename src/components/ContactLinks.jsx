import { person, socials } from '../data/site.js';

// E-mail (+ optioneel telefoon) en socials als lijst.
// Waarom één component: dit rijtje staat in de hero en in de footer.
// De opmaak verschilt per plek, dus die komt binnen via className.
export default function ContactLinks({ className, withPhone = false }) {
  return (
    <ul className={className}>
      <li>
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </li>
      {withPhone && (
        <li>
          <a href={`tel:${person.phone}`}>{person.phoneDisplay}</a>
        </li>
      )}
      {socials.map(({ label, href }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer">
            {label} ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
