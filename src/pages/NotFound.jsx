import PageHero from '../components/PageHero.jsx';
import ButtonLink from '../components/ButtonLink.jsx';

// Voor onbekende URL's én voor een project-slug die niet bestaat.
export default function NotFound() {
  return (
    <>
      <title>Pagina niet gevonden</title>
      <PageHero title="Pagina niet gevonden" intro="Deze pagina bestaat niet (meer)." />
      <section className="section">
        <div className="container button-row">
          <ButtonLink to="/">Naar home</ButtonLink>
          <ButtonLink to="/werk" variant="outline">
            Bekijk mijn werk
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
