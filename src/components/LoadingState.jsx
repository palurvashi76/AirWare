export default function LoadingState() {
  return (
    <div aria-label="Loading air quality data" role="status">
      {/* Location skeleton */}
      <div className="skeleton-section">
        <div className="skeleton" style={{ width: 180, height: 22, marginBottom: 6 }} />
        <div className="skeleton" style={{ width: 240, height: 13 }} />
      </div>

      {/* AQI skeleton */}
      <div className="skeleton-aqi">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div className="skeleton" style={{ width: 70, height: 11 }} />
          <div className="skeleton" style={{ width: 80, height: 48 }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="skeleton" style={{ width: 160, height: 18 }} />
          <div className="skeleton" style={{ width: '80%', height: 13 }} />
          <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 4 }} />
        </div>
      </div>

      {/* Pollutant grid skeleton */}
      <div className="skeleton-pollutant-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="skeleton-pollutant-card" key={i}>
            <div className="skeleton" style={{ width: 50, height: 11 }} />
            <div className="skeleton" style={{ width: 70, height: 22 }} />
            <div className="skeleton" style={{ width: 100, height: 12 }} />
          </div>
        ))}
      </div>

      {/* Weather skeleton */}
      <div className="skeleton-weather">
        <div className="skeleton" style={{ width: 100, height: 11 }} />
        <div className="skeleton-weather-grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="skeleton-weather-item" key={i}>
              <div className="skeleton" style={{ width: 80, height: 12 }} />
              <div className="skeleton" style={{ width: 60, height: 18 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Forecast skeleton */}
      <div className="skeleton-forecast">
        <div className="skeleton" style={{ width: 130, height: 11 }} />
        <div className="skeleton-forecast-grid">
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="skeleton-forecast-card" key={i}>
              <div className="skeleton" style={{ width: 50, height: 12 }} />
              <div className="skeleton" style={{ width: 36, height: 20 }} />
              <div className="skeleton" style={{ width: 44, height: 10 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
