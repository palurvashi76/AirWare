import { Wind } from 'lucide-react';
import SearchBar from './components/SearchBar';
import LocationPicker from './components/LocationPicker';
import LocationHeader from './components/LocationHeader';
import AQIOverview from './components/AQIOverview';
import PollutantGrid from './components/PollutantGrid';
import WeatherCard from './components/WeatherCard';
import ForecastSection from './components/ForecastSection';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import EmptyState from './components/EmptyState';
import { useAirQuality } from './hooks/useAirQuality';

export default function App() {
  const {
    locations,
    selectedLocation,
    airQuality,
    weather,
    loading,
    searching,
    error,
    search,
    selectLocation,
  } = useAirQuality();

  const hasData = selectedLocation && airQuality;

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-header-left">
            <span className="app-header-logo" aria-hidden="true" style={{ marginTop: '2px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3L4 19" />
                <path d="M12 3l8 16" />
                <path d="M8 11h13" />
                <path d="M6 15h14" />
              </svg>
            </span>
            <span className="app-header-title">AeroSense</span>
          </div>
          <div className="app-header-right">Global Air Quality</div>
        </div>
      </header>

      <main className="app-main">
        {!hasData && !loading && !error && locations.length === 0 && (
          <div className="hero-section">
            <h1 className="hero-title">Environmental Intelligence</h1>
            <p className="hero-subtitle">
              Monitor real-time air quality, specific pollutants, and weather conditions for any city worldwide.
            </p>
          </div>
        )}

        <SearchBar onSearch={search} loading={searching || loading} />

        {locations.length > 0 && !selectedLocation && (
          <LocationPicker locations={locations} onSelect={selectLocation} />
        )}

        {error && (
          <ErrorState
            title="Unable to load data"
            message={error.message}
          />
        )}

        {loading && !error && <LoadingState />}

        {!loading && hasData && (
          <div className="results-section">
            <LocationHeader location={selectedLocation} />
            <AQIOverview airQuality={airQuality} />
            <PollutantGrid airQuality={airQuality} />
            <WeatherCard weather={weather} />
            <ForecastSection airQuality={airQuality} />
          </div>
        )}

        {!loading && !hasData && !error && locations.length === 0 && (
          <EmptyState />
        )}
      </main>

      <footer className="app-footer">
        <div className="app-footer-inner">
          <span>&copy; {new Date().getFullYear()} AeroSense</span>
          <span className="app-footer-dot"></span>
          <span>Environmental Data</span>
        </div>
      </footer>
    </>
  );
}
