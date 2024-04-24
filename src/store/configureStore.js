import { configureStore } from '@reduxjs/toolkit';
import reducerWeather from './weatherSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: { weatherForecast: reducerWeather, theme: themeReducer },
});

export default store;
