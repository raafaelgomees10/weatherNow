import config from '../core/config';
import fetchMock from 'jest-fetch-mock';
import { configureStore } from '@reduxjs/toolkit';
import reducerWeather, { fetchWeatherForecast } from './weatherSlice';
fetchMock.enableMocks();

describe('Weather Forecast Slice', () => {
  let store;

  beforeEach(() => {
    fetchMock.resetMocks();
    store = configureStore({
      reducer: {
        weatherForecast: reducerWeather,
      },
    });
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('Should construct params correctly when city is provided', async () => {
    const city = 'London';
    const mockWeatherData = {
      weather: { cod: 200, coord: { lat: 51.5074, lon: -0.1278 } },
      forecast: {},
    };

    fetchMock.mockResponses(
      [JSON.stringify(mockWeatherData.weather), { status: 200 }],
      [JSON.stringify(mockWeatherData.forecast), { status: 200 }]
    );

    await store.dispatch(fetchWeatherForecast({ city }));

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.urlWeatherApi}/weather?appid=${config.apiKey}&units=metric&exclude=minutely&q=${city}`
    );
  });

  it('Should handle fetch weather forecast success', async () => {
    const mockWeatherData = {
      weather: { cod: 200, coord: { lat: 51.5074, lon: -0.1278 } },
      forecast: {},
    };

    fetchMock.mockResponses(
      [JSON.stringify(mockWeatherData.weather), { status: 200 }],
      [JSON.stringify(mockWeatherData.forecast), { status: 200 }]
    );

    await store.dispatch(fetchWeatherForecast({ city: 'London' }));

    const state = store.getState().weatherForecast;

    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.data).toEqual(mockWeatherData);
  });

  it('Should handle fetch weather forecast failure due to API error', async () => {
    fetchMock.mockResponses([
      JSON.stringify({ cod: 400, message: 'city not found' }),
      { status: 400 },
    ]);

    await store.dispatch(fetchWeatherForecast({ city: 'InvalidCity' }));

    const state = store.getState().weatherForecast;

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
    expect(state.data).toEqual([]);
  });

  it('Should handle fetch weather forecast failure due to network error', async () => {
    fetchMock.mockRejectOnce(new Error('Network Error'));

    await store.dispatch(fetchWeatherForecast({ city: 'London' }));

    const state = store.getState().weatherForecast;

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
    expect(state.data).toEqual([]);
  });
});
