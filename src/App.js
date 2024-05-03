import Header from './components/header';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from './globalStyles';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import LocalTime from './components/localTime';
import { useEffect } from 'react';
import { fetchWeatherForecast } from './store/weatherSlice';

function App() {
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

  if (error) {
    return <p>error</p>;
  }
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <ThemeProvider
      theme={
        localStorage.getItem('isDarkMode') === 'true' ? darkTheme : lightTheme
      }
    >
      <GlobalStyles />
      <div className="container">
        <Header />
        <LocalTime cityName={cityName} forecast={forecastData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
