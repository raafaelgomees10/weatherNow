import React, { useEffect } from 'react';
import Header from '../components/header';
import LocalTime from '../components/localTime';
import WeatherDetails from '../components/weatherDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherForecast } from '../store/weatherSlice';
import * as S from './styles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';
import { GlobalStyles } from '../globalStyles';

const Home = () => {
  const { data, loading, error } = useSelector(
    (state) => state.weatherForecast
  );
  useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchWeatherForecast({
        lat: 51.5085,
        lon: -0.1257,
      })
    );
  }, [dispatch]);

  const cityName = data?.weather?.name;
  const forecastData = data?.forecast;

  return (
    <ThemeProvider
      theme={
        localStorage.getItem('isDarkMode') === 'true' ? darkTheme : lightTheme
      }
    >
      <GlobalStyles />

      <div className="container">
        <Header />

        {error ? (
          <p>error</p>
        ) : loading ? (
          <p>loading</p>
        ) : (
          <S.TopContent>
            <LocalTime cityName={cityName} forecast={forecastData} />
            <WeatherDetails forecast={forecastData} />
          </S.TopContent>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Home;
