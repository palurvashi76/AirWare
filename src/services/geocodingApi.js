import axios from 'axios';

const geocodingApi = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1',
});

export async function searchLocation(query) {
  if (!query || !query.trim()) return [];

  try {
    const { data } = await geocodingApi.get('/search', {
      params: {
        name: query.trim(),
        count: 5,
        language: 'en',
        format: 'json',
      },
    });
    return data.results || [];
  } catch (error) {
    if (!error.response) {
      throw { message: 'Unable to connect. Check your network connection.' };
    }
    throw { message: 'Failed to search for locations. Try again.' };
  }
}
