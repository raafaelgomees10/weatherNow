import React, { useEffect } from 'react';
import * as S from './styles';
import Header from '../components/header';
import Footer from '../components/footer';
import Loading from '../components/loading';
import Error from '../components/helper/Error';
import { GlobalStyles } from '../globalStyles';
import LocalTime from '../components/localTime';
import { darkTheme, lightTheme } from '../theme';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import DailyForecast from '../components/dailyForecast';
import HourlyForecast from '../components/hourlyForecast';
import WeatherDetails from '../components/weatherDetails';
import { fetchWeatherForecast } from '../store/weatherSlice';

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
          <Error />
        ) : loading ? (
          <Loading />
        ) : (
          <S.Content>
            <LocalTime cityName={cityName} forecast={forecastData} />
            <WeatherDetails forecast={forecastData} />

            <DailyForecast forecast={forecastData} />
            <HourlyForecast forecast={forecastData} />
          </S.Content>
        )}
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
