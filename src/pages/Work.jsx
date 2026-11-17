import { useSearchParams } from 'react-router';
import { projects, SOURCES } from '../data/projects.js';
import PageHero from '../components/PageHero.jsx';
import ProjectGrid from '../components/ProjectGrid.jsx';

// "alle" + de bronnen uit projects.js. Komt er een bron bij, dan verschijnt
// de filterknop vanzelf.
const FILTERS = ['alle', ...Object.keys(SOURCES)];

export default function Work() {
  // Waarom de filter in de URL (?filter=scrimba) en niet in useState:
  // je kunt de gefilterde lijst delen of bookmarken, en "terug" vanaf
  // een projectpagina brengt je bij dezelfde filter.
  const [searchParams, setSearchParams] = useSearchParams();
  const active = FILTERS.includes(searchParams.get('filter')) ? searchParams.get('filter') : 'alle';

  const countFor = (filter) =>
    filter === 'alle' ? projects.length : projects.filter((project) => project.source === filter).length;

  const visible = active === 'alle' ? projects : projects.filter((project) => project.source === active);

  const selectFilter = (filter) =>
    setSearchParams(filter === 'alle' ? {} : { filter }, { preventScrollReset: true });

  return (
    <>
      <title>Mijn werk — Mischa Leijder Havenstroom</title>

      <PageHero
        title="Mijn werk"
        intro="Schoolprojecten en apps die ik bouwde tijdens het Scrimba Frontend Developer Path. Filter op wat je wilt zien."
      />

      <section className="section">
        <div className="container stack">
          <div className="filter-bar">
            <div className="filter-bar__buttons" role="group" aria-label="Filter projecten">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className="filter-button"
                  aria-pressed={filter === active}
                  onClick={() => selectFilter(filter)}
                >
                  {filter === 'alle' ? 'Alles' : SOURCES[filter].filter} ({countFor(filter)})
                </button>
              ))}
            </div>
            <p className="filter-bar__count" aria-live="polite">
              {visible.length} projecten
            </p>
          </div>

          <ProjectGrid projects={visible} />
        </div>
      </section>
    </>
  );
}
