// De huisstijl: twee vierkanten, het ene achter het andere.
// Eén component voor zowel de grote versie (hero/headers) als het kleine icoon
// bij kopjes. Kleur en lijndikte komen uit CSS (.double-square--icon),
// zodat de vorm maar één keer getekend wordt.
// De viewBox heeft wat ruimte rondom, zodat dikke randen niet worden afgesneden.
export default function DoubleSquare({ variant = 'large' }) {
  return (
    <svg
      className={`double-square double-square--${variant}`}
      viewBox="-12 -12 235 267"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="double-square__back" x="0" y="0" width="156" height="175" />
      <rect className="double-square__front" x="55" y="68" width="156" height="175" />
    </svg>
  );
}
