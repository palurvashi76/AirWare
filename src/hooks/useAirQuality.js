import { useState, useCallback, useRef } from 'react';
import { searchLocation } from '../services/geocodingApi';
import { getAirQuality } from '../services/airQualityApi';
import { getWeather } from '../services/weatherApi';

export function useAirQuality() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);
  const currentRequest = useRef(0);

  const search = useCallback(async (query) => {
    const requestId = ++currentRequest.current;
    setSearching(true);
    setError(null);
    setLocations([]);
    setSelectedLocation(null);
    setAirQuality(null);
    setWeather(null);

    try {
      const results = await searchLocation(query);
      if (requestId !== currentRequest.current) return;

      if (results.length === 0) {
        setError({ message: 'Location not found. Try searching for another city or region.' });
        setSearching(false);
        return;
      }

      if (results.length === 1) {
        setSearching(false);
        await selectLocation(results[0], requestId);
        return;
      }

      setLocations(results);
      setSearching(false);
    } catch (err) {
      if (requestId !== currentRequest.current) return;
      setError(err);
      setSearching(false);
    }
  }, []);

  const selectLocation = useCallback(async (location, existingRequestId) => {
    const requestId = existingRequestId || ++currentRequest.current;
    setSelectedLocation(location);
    setLocations([]);
    setLoading(true);
    setError(null);

    try {
      const [aqData, weatherData] = await Promise.allSettled([
        getAirQuality(location.latitude, location.longitude),
        getWeather(location.latitude, location.longitude),
      ]);

      if (requestId !== currentRequest.current) return;

      if (aqData.status === 'fulfilled') {
        setAirQuality(aqData.value);
      } else {
        setError({ message: 'Failed to load air quality data for this location.' });
      }

      if (weatherData.status === 'fulfilled') {
        setWeather(weatherData.value);
      }
    } catch (err) {
      if (requestId !== currentRequest.current) return;
      setError(err);
    } finally {
      if (requestId === currentRequest.current) {
        setLoading(false);
      }
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {
    locations,
    selectedLocation,
    airQuality,
    weather,
    loading,
    searching,
    error,
    search,
    selectLocation,
    clearError,
  };
}
