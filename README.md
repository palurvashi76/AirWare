# AirAware

A professional global air-quality dashboard that fetches real API data and displays it using reusable React components.

## Overview

AirAware allows users to search for any city globally and view current air quality, pollutant breakdowns, weather context, and a 5-day air quality forecast. It demonstrates React API integration, component reusability, and robust error/loading state handling without relying on a backend.

## Features

- **Global city search** — powered by the Open-Meteo Geocoding API.
- **Air-quality data** — real-time AQI using the European Air Quality Index scale.
- **Pollutant information** — detailed breakdowns for PM2.5, PM10, O₃, NO₂, CO, and SO₂ using a highly reusable component.
- **Weather context** — contextual temperature, humidity, and wind speed data.
- **Forecast** — a 5-day daily aggregated air quality forecast.
- **Loading states** — custom skeleton UI matching the dashboard layout to indicate data fetching.
- **Error handling** — user-friendly error boundaries for network failures or location misses.
- **Responsive design** — adapts seamlessly from desktop to mobile screens using CSS Grid and Flexbox.

## Tech Stack

- React 19
- Vite 8
- Axios (HTTP client)
- Lucide React (Icons)
- Vanilla CSS
- Open-Meteo APIs (Geocoding, Air Quality, Weather)

## API Documentation

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for details on the API endpoints used.

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Build

To build the application for production:
```bash
npm run build
```
The output will be available in the `dist` directory.

## Deployment

This project requires no backend and can be deployed as a static site to services like Vercel, Netlify, or GitHub Pages. Simply deploy the output of the `npm run build` command.
