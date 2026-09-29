import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
});

export async function getWeather(latitude, longitude) {
  try {
    const { data } = await weatherApi.get('/forecast', {
      params: {
        latitude,
        longitude,
        current: [
          'temperature_2m',
          'relative_humidity_2m',
          'wind_speed_10m',
          'weather_code',
        ].join(','),
        timezone: 'auto',
      },
    });
    return data;
  } catch (error) {
    if (!error.response) {
      throw { message: 'Unable to connect. Check your network connection.' };
    }
    throw { message: 'Failed to load weather data.' };
  }
}
