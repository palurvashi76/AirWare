import { Wind } from 'lucide-react';

export default function EmptyState({ message, subtext }) {
  return (
    <div className="empty-state">
      <Wind size={48} className="empty-state-icon" aria-hidden="true" />
      <p className="empty-state-title">{message || 'AeroSense'}</p>
      <p className="empty-state-message">
        {subtext || 'Search for a city to explore current air quality and weather.'}
      </p>
    </div>
  );
}
