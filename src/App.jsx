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
            <span className="app-header-logo" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#2563EB"/>
                <circle cx="16" cy="16" r="6" stroke="#fff" strokeWidth="2" fill="none"/>
                <path d="M16 8v3M16 21v3M8 16h3M21 16h3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="app-header-title">AirAware</span>
          </div>
          <div className="app-header-right">Global Air Quality</div>
        </div>
      </header>

      <main className="app-main">
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
          <>
            <LocationHeader location={selectedLocation} />
            <AQIOverview airQuality={airQuality} />
            <PollutantGrid airQuality={airQuality} />
            <WeatherCard weather={weather} />
            <ForecastSection airQuality={airQuality} />
          </>
        )}

        {!loading && !hasData && !error && locations.length === 0 && (
          <EmptyState />
        )}
      </main>
    </>
  );
}
