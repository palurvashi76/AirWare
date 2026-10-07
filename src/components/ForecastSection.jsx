import { useMemo } from 'react';
import { Calendar } from 'lucide-react';
import { getAQICategory } from '../utils/airQuality';
import { formatDayLabel } from '../utils/formatters';

export default function ForecastSection({ airQuality }) {
  const forecast = useMemo(() => {
    if (!airQuality?.hourly?.time || !airQuality?.hourly?.european_aqi) return [];

    const hourlyTimes = airQuality.hourly.time;
    const hourlyAQI = airQuality.hourly.european_aqi;

    const dailyMap = {};
    for (let i = 0; i < hourlyTimes.length; i++) {
      const day = hourlyTimes[i].substring(0, 10);
      if (!dailyMap[day]) dailyMap[day] = [];
      if (hourlyAQI[i] != null) dailyMap[day].push(hourlyAQI[i]);
    }

    return Object.entries(dailyMap)
      .map(([date, values]) => ({
        date,
        avgAQI: Math.round(values.reduce((a, b) => a + b, 0) / values.length),
      }))
      .slice(0, 5);
  }, [airQuality]);

  if (forecast.length === 0) return null;

  return (
    <div className="forecast-section">
      <h2 className="section-title">
        <Calendar size={16} className="section-title-icon" strokeWidth={2.5} />
        Air Quality Forecast
      </h2>
      <div className="forecast-card-wrap">
        <div className="forecast-grid" role="list" aria-label="Air quality forecast">
          {forecast.map((day, index) => {
            const category = getAQICategory(day.avgAQI);
            return (
              <div className="forecast-card" key={day.date} role="listitem" style={{ backgroundColor: `${category.color}08` }}>
                <div className="forecast-card-day">{formatDayLabel(day.date, index)}</div>
                <div className="forecast-card-value" style={{ color: category.color }}>
                  {day.avgAQI}
                </div>
                <div className="forecast-card-label" style={{ color: category.color }}>
                  {category.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
