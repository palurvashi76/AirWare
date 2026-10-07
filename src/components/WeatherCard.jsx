import { CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';
import { formatTemperature, formatHumidity, formatWindSpeed } from '../utils/formatters';

export default function WeatherCard({ weather }) {
  const current = weather?.current;
  if (!current) return null;

  return (
    <div className="weather-section">
      <h2 className="section-title">
        <CloudRain size={16} className="section-title-icon" strokeWidth={2.5} />
        Current Weather
      </h2>
      <div className="weather-card">
        <div className="weather-card-grid">
          <div className="weather-card-item">
            <span className="weather-card-item-label">
              <Thermometer size={14} className="weather-card-item-icon" aria-hidden="true" /> Temperature
            </span>
            <span className="weather-card-item-value">
              {formatTemperature(current.temperature_2m)}
            </span>
          </div>
          <div className="weather-card-item">
            <span className="weather-card-item-label">
              <Droplets size={14} className="weather-card-item-icon" aria-hidden="true" /> Humidity
            </span>
            <span className="weather-card-item-value">
              {formatHumidity(current.relative_humidity_2m)}
            </span>
          </div>
          <div className="weather-card-item">
            <span className="weather-card-item-label">
              <Wind size={14} className="weather-card-item-icon" aria-hidden="true" /> Wind
            </span>
            <span className="weather-card-item-value">
              {formatWindSpeed(current.wind_speed_10m)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
