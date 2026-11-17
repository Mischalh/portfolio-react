import { person, socials } from '../data/site.js';
import PageHero from '../components/PageHero.jsx';

// Het formulier opent je eigen mailprogramma met alles al ingevuld (mailto).
// Waarom: deze site heeft geen server (GitHub Pages). Een "verstuur"-knop die
// niets verstuurt zou misleidend zijn. Wil je later echt versturen, dan kun je
// handleSubmit vervangen door een dienst als Formspree.
// Waarom geen e-mailveld: het bericht komt uit het mailprogramma van de bezoeker,
// dus jij ziet hun adres al.
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = form.get('onderwerp');
  const body = `${form.get('bericht')}\n\n— ${form.get('naam')}`;
  window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// De velden als data: zo staat de label/input-opmaak maar één keer in de JSX.
const fields = [
  { name: 'naam', label: 'Naam', placeholder: 'Je naam' },
  { name: 'onderwerp', label: 'Onderwerp', placeholder: 'Waar gaat het over?' },
  { name: 'bericht', label: 'Bericht', placeholder: 'Vertel me meer…', multiline: true },
];

export default function Contact() {
  const contactCards = [
    { label: 'E-mail', value: person.email, href: `mailto:${person.email}` },
    { label: 'Telefoon', value: person.phoneDisplay, href: `tel:${person.phone}` },
  ];

  return (
    <>
      <title>Contact — Mischa Leijder Havenstroom</title>

      <PageHero
        title="Contact"
        intro="Heb je een vraag, opdracht of wil je kennismaken? Vul het formulier in of mail me direct."
      />

      <section className="section">
        <div className="container contact">
          <form className="card contact__form" onSubmit={handleSubmit}>
            {fields.map(({ name, label, placeholder, multiline }) => {
              const Field = multiline ? 'textarea' : 'input';
              return (
                <div key={name} className="field">
                  <label htmlFor={name}>{label}</label>
                  <Field id={name} name={name} placeholder={placeholder} rows={multiline ? 6 : undefined} required />
                </div>
              );
            })}
            <button type="submit" className="btn btn--purple">
              Verstuur bericht
            </button>
          </form>

          <aside className="contact__aside">
            {contactCards.map(({ label, value, href }) => (
              <a key={label} href={href} className="card contact-card">
                <span className="contact-card__label">{label}</span>
                <strong className="contact-card__value">{value}</strong>
              </a>
            ))}
            <div className="card card--purple contact-card contact-card--socials">
              <h2 className="text-card__title">Vind mij online</h2>
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
                  {label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
