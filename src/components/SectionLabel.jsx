import DoubleSquare from './DoubleSquare.jsx';

// Klein label boven een sectiekop ("Uitgelicht werk", "Certificaten", ...).
export default function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <DoubleSquare variant="icon" />
      {children}
    </p>
  );
}
