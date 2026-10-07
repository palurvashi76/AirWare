import PollutantCard from './PollutantCard';
import { POLLUTANT_INFO } from '../utils/airQuality';
import { Activity } from 'lucide-react';

const POLLUTANT_KEYS = ['pm2_5', 'pm10', 'ozone', 'nitrogen_dioxide', 'carbon_monoxide', 'sulphur_dioxide'];

export default function PollutantGrid({ airQuality }) {
  const current = airQuality?.current;

  return (
    <div className="pollutant-section">
      <h2 className="section-title">
        <Activity size={16} className="section-title-icon" strokeWidth={2.5} />
        Pollutant Levels
      </h2>
      <div className="pollutant-grid" role="list" aria-label="Pollutant levels">
        {POLLUTANT_KEYS.map((key) => {
          const info = POLLUTANT_INFO[key];
          return (
            <div role="listitem" key={key}>
              <PollutantCard
                name={info.name}
                value={current?.[key]}
                unit={info.unit}
                description={info.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
