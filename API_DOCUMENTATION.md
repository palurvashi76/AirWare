# API Documentation

AeroSense utilizes public APIs provided by [Open-Meteo](https://open-meteo.com/). All requests are handled via Axios in dedicated service modules.

---

## Open-Meteo Geocoding API

**Endpoint:** `https://geocoding-api.open-meteo.com/v1/search`  
**Method:** GET

**Purpose:**  
Converts a user's text search (e.g., "Mumbai") into geographical coordinates (latitude and longitude) and provides location metadata (country, region, elevation).

**Parameters:**
- `name`: The city or region to search for.
- `count`: Maximum number of results to return (set to 5).
- `language`: Language for the results (set to `en`).
- `format`: Response format (set to `json`).

**Used by:**  
- `src/services/geocodingApi.js`
- `SearchBar` (triggers the request)
- `LocationPicker` (displays the results)

---

## Open-Meteo Air Quality API

**Endpoint:** `https://air-quality-api.open-meteo.com/v1/air-quality`  
**Method:** GET

**Purpose:**  
Fetches current air quality index, detailed pollutant concentrations, and hourly AQI forecasts based on latitude and longitude.

**Parameters:**
- `latitude`: Location latitude.
- `longitude`: Location longitude.
- `current`: A comma-separated list of variables to fetch for the current time (`european_aqi`, `pm10`, `pm2_5`, `carbon_monoxide`, `nitrogen_dioxide`, `sulphur_dioxide`, `ozone`).
- `hourly`: Variables to fetch for the hourly forecast (`european_aqi`).
- `forecast_days`: Number of days to forecast (set to 5).
- `timezone`: Timezone for the data (set to `auto`).

**Used by:**  
- `src/services/airQualityApi.js`
- `AQIOverview` (displays the current AQI and status)
- `PollutantGrid` (displays individual pollutant values)
- `ForecastSection` (aggregates and displays the hourly AQI data as daily averages)

---

## Open-Meteo Weather API

**Endpoint:** `https://api.open-meteo.com/v1/forecast`  
**Method:** GET

**Purpose:**  
Fetches contextual current weather information for the specified location.

**Parameters:**
- `latitude`: Location latitude.
- `longitude`: Location longitude.
- `current`: A comma-separated list of weather variables (`temperature_2m`, `relative_humidity_2m`, `wind_speed_10m`, `weather_code`).
- `timezone`: Timezone for the data (set to `auto`).

**Used by:**  
- `src/services/weatherApi.js`
- `WeatherCard` (displays temperature, humidity, and wind speed)

---

## Interpretation of Air Quality

The application uses the **European Air Quality Index (EAQI)** scale provided by Open-Meteo. The AQI value is mapped to status labels and colors in `src/utils/airQuality.js` as follows:

- **0 - 20:** Good (Green)
- **21 - 40:** Fair (Light Green)
- **41 - 60:** Moderate (Yellow)
- **61 - 80:** Poor (Orange)
- **81 - 100:** Very Poor (Red)
- **> 100:** Hazardous (Dark Red)
