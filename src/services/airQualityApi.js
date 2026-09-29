import axios from 'axios';

const airQualityApi = axios.create({
  baseURL: 'https://air-quality-api.open-meteo.com/v1',
});

export async function getAirQuality(latitude, longitude) {
  try {
    const { data } = await airQualityApi.get('/air-quality', {
      params: {
        latitude,
        longitude,
        current: [
          'european_aqi',
          'pm10',
          'pm2_5',
          'carbon_monoxide',
          'nitrogen_dioxide',
          'sulphur_dioxide',
          'ozone',
        ].join(','),
        hourly: 'european_aqi',
        forecast_days: 5,
        timezone: 'auto',
      },
    });
    return data;
  } catch (error) {
    if (!error.response) {
      throw { message: 'Unable to connect. Check your network connection.' };
    }
    throw { message: 'Failed to load air quality data.' };
  }
}
