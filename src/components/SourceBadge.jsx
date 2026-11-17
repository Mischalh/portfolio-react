import { SOURCES } from '../data/projects.js';

// Label "Scrimba" of "School". Op de kaart kort, op de detailpagina lang.
export default function SourceBadge({ source, long = false }) {
  const { label, long: longLabel } = SOURCES[source];
  return <span className={`badge badge--${source}`}>{long ? longLabel : label}</span>;
}
