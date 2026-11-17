import { Link } from 'react-router';

// Eén knop-component voor interne én externe links.
// Waarom: interne links moeten <Link> zijn (geen herlaad van de pagina),
// externe links een gewone <a> die in een nieuw tabblad opent.
// Zo hoeft geen enkele pagina die keuze zelf te maken.
export default function ButtonLink({ to, variant = 'purple', children }) {
  const className = `btn btn--${variant}`;
  const isExternal = /^(https?:|mailto:|tel:)/.test(to) || to.endsWith('.pdf');

  if (isExternal) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
