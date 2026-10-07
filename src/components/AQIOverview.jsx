import { getAQICategory } from '../utils/airQuality';
import StatusBadge from './StatusBadge';

export default function AQIOverview({ airQuality }) {
  const currentAQI = airQuality?.current?.european_aqi;
  const category = getAQICategory(currentAQI);

  return (
    <div className="aqi-overview">
      <div className="aqi-ring-wrap">
        <div
          className="aqi-ring"
          style={{
            background: `conic-gradient(${category.color} ${Math.min((currentAQI || 0) / 100 * 100, 100)}%, var(--border) 0)`
          }}
        >
          <div className="aqi-ring-inner">
            <span className="aqi-ring-value" style={{ color: category.color }}>
              {currentAQI != null ? Math.round(currentAQI) : '—'}
            </span>
            <span className="aqi-ring-label">EU AQI</span>
          </div>
        </div>
      </div>
      <div className="aqi-overview-info">
        <div className="aqi-overview-status" style={{ color: category.color }}>
          {category.label}
        </div>
        <p className="aqi-overview-desc">
          {getDescription(category.level)}
        </p>
        <StatusBadge label={category.label} color={category.color} />
      </div>
    </div>
  );
}

function getDescription(level) {
  switch (level) {
    case 'good':
      return 'Air quality is satisfactory. Enjoy outdoor activities.';
    case 'fair':
      return 'Air quality is acceptable. Unusually sensitive individuals may experience minor effects.';
    case 'moderate':
      return 'Some pollutants may pose a moderate health concern for a very small number of individuals.';
    case 'poor':
      return 'Health effects may be experienced by sensitive groups. The general public is less likely to be affected.';
    case 'very-poor':
      return 'Health alert: significant health effects may be experienced by the general population.';
    case 'hazardous':
      return 'Health warning of emergency conditions. The entire population is likely to be affected.';
    default:
      return 'Air quality data is not available for this location.';
  }
}
