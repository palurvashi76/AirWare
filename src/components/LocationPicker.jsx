import { MapPin } from 'lucide-react';
import { formatLocationName } from '../utils/formatters';

export default function LocationPicker({ locations, onSelect }) {
  if (!locations || locations.length === 0) return null;

  return (
    <div className="location-picker" role="listbox" aria-label="Select a location">
      <div className="location-picker-header">Select a location</div>
      {locations.map((loc) => (
        <button
          key={loc.id}
          className="location-picker-item"
          onClick={() => onSelect(loc)}
          role="option"
          aria-selected="false"
        >
          <MapPin size={16} className="location-picker-icon" aria-hidden="true" />
          <span>{formatLocationName(loc)}</span>
          {loc.elevation != null && (
            <span className="location-picker-detail">{loc.elevation}m elev.</span>
          )}
        </button>
      ))}
    </div>
  );
}
