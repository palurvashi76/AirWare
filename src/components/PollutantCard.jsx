import { formatPollutantValue } from '../utils/formatters';

export default function PollutantCard({ name, value, unit, description }) {
  const formattedValue = formatPollutantValue(value);

  return (
    <div className="pollutant-card">
      <div className="pollutant-card-name">{name}</div>
      {formattedValue !== null ? (
        <>
          <div className="pollutant-card-value-row">
            <span className="pollutant-card-value">{formattedValue}</span>
            <span className="pollutant-card-unit">{unit}</span>
          </div>
          <div className="pollutant-card-desc">{description}</div>
        </>
      ) : (
        <div className="pollutant-card-unavailable">Data unavailable</div>
      )}
    </div>
  );
}
