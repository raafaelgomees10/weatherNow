import config from '../core/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseParams = `appid=${config.apiKey}&units=metric&exclude=minutely`;

export const fetchWeatherForecast = createAsyncThunk(
  'fetchWeatherForecast',
  async ({ city, lat, lon }) => {
    try {
      const params = city ? `q=${city}` : `lat=${lat}&lon=${lon}`;

      const weatherResponse = await fetch(
        `${config.urlWeatherApi}/weather?${baseParams}&${params}`
      );

      const weatherData = await weatherResponse.json();

      if (weatherData.cod === 200) {
        const forecastResponse = await fetch(
          `${config.urlWeatherApi}/onecall?${baseParams}&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}`
        );

        const forecastData = await forecastResponse.json();

        return { weather: weatherData, forecast: forecastData };
      } else {
        throw new Error('error');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weatherForecast',
  initialState: {
    loading: false,
    data: {},
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherForecast.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(fetchWeatherForecast.rejected, (state, action) => {
      state.error = true;
      state.data = [];
      state.loading = false;
    });
  },
});

const reducerWeather = weatherSlice.reducer;

export default reducerWeather;
