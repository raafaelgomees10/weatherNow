import themeReducer from './themeSlice';
import reducerWeather from './weatherSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { weatherForecast: reducerWeather, theme: themeReducer },
});

export default store;
