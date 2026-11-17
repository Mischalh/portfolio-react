// Het MLH-logo. Eigen component omdat het in header én footer staat;
// zo staat het pad en de alt-tekst maar op één plek.
export default function Logo({ className = 'logo' }) {
  return <img src="/images/logo.png" alt="MLH logo" className={className} />;
}
