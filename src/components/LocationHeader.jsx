import { formatLocationName } from '../utils/formatters';

export default function LocationHeader({ location }) {
  if (!location) return null;

  return (
    <div className="location-header">
      <h1 className="location-header-name">{location.name}</h1>
      <p className="location-header-sub">{formatLocationName(location)}</p>
    </div>
  );
}
