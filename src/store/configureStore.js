import { configureStore } from '@reduxjs/toolkit';
import reducerWeather from './weatherSlice';

const store = configureStore({
  reducer: { weatherForecast: reducerWeather },
});
export default store;
