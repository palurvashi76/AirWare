/**
 * AQI category thresholds based on the European Air Quality Index scale
 * used by Open-Meteo. The european_aqi value maps to these categories.
 */
const AQI_CATEGORIES = [
  { max: 20, label: 'Good', color: '#16A34A', level: 'good' },
  { max: 40, label: 'Fair', color: '#65A30D', level: 'fair' },
  { max: 60, label: 'Moderate', color: '#CA8A04', level: 'moderate' },
  { max: 80, label: 'Poor', color: '#EA580C', level: 'poor' },
  { max: 100, label: 'Very Poor', color: '#DC2626', level: 'very-poor' },
  { max: Infinity, label: 'Hazardous', color: '#7F1D1D', level: 'hazardous' },
];

export function getAQICategory(aqi) {
  if (aqi == null || isNaN(aqi)) {
    return { label: 'Unavailable', color: '#98A2B3', level: 'unavailable' };
  }
  for (const cat of AQI_CATEGORIES) {
    if (aqi <= cat.max) return cat;
  }
  return AQI_CATEGORIES[AQI_CATEGORIES.length - 1];
}

export const POLLUTANT_INFO = {
  pm2_5: {
    name: 'PM2.5',
    unit: 'µg/m³',
    description: 'Fine particulate matter',
  },
  pm10: {
    name: 'PM10',
    unit: 'µg/m³',
    description: 'Coarse particulate matter',
  },
  ozone: {
    name: 'O₃',
    unit: 'µg/m³',
    description: 'Ozone',
  },
  nitrogen_dioxide: {
    name: 'NO₂',
    unit: 'µg/m³',
    description: 'Nitrogen dioxide',
  },
  carbon_monoxide: {
    name: 'CO',
    unit: 'µg/m³',
    description: 'Carbon monoxide',
  },
  sulphur_dioxide: {
    name: 'SO₂',
    unit: 'µg/m³',
    description: 'Sulphur dioxide',
  },
};
