import config from '../core/config';

const API_URL = 'https://api.openweathermap.org/data/2.5';

const baseParams = `appid=${config.apiKey}&units=metric&exclude=minutely`;

export function GET_WEATHER_CITY(city) {
  return {
    url: `${API_URL}/weather?${baseParams}&q=${city}`,
    options: {
      method: 'GET',
    },
  };
}

export function GET_WEATHER_FORECAST(lat, lon) {
  return {
    url: `${API_URL}/onecall?${baseParams}&lat=${lat}&lon=${lon}`,
    options: {
      method: 'GET',
    },
  };
}
