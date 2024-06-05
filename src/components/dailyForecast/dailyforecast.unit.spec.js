import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import DailyForecast from '.';
import { render, screen, within } from '@testing-library/react';
import { getDateAndTimeFromTimestamp } from '';
import WeatherIcon from '../../utils/getWeatherIcon';

const forecast = {
  daily: [
    {
      dt: 1717671600,
      temp: { day: 20 },
      weather: [{ main: 'Clear', description: 'clear sky', icon: '10d' }],
    },
    {
      dt: 1717758000,
      temp: { day: 21 },
      weather: [{ main: 'Clouds', description: 'cloudy', icon: '10d' }],
    },
    {
      dt: 1717844400,
      temp: { day: 22 },
      weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }],
    },
    {
      dt: 1717930800,
      temp: { day: 23 },
      weather: [{ main: 'Snow', description: 'snow', icon: '10d' }],
    },
    {
      dt: 1718020800,
      temp: { day: 26 },
      weather: [{ main: 'Wind', description: 'wind', icon: '10d' }],
    },
    {
      dt: 1718107200,
      temp: { day: 27 },
      weather: [{ main: 'Wind', description: 'wind', icon: '10d' }],
    },
    {
      dt: 1718193600,
      temp: { day: 28 },
      weather: [{ main: 'Wind', description: 'wind', icon: '10d' }],
    },
    {
      dt: 1717585200,
      temp: { day: 28 },
      weather: [{ main: 'Wind', description: 'wind', icon: '10d' }],
    },
  ],
  timezone_offset: 3600,
};

jest.mock('../../utils/getWeatherIcon', () => jest.fn(() => null));

const renderDailyForecast = () => {
  render(
    <Provider store={store}>
      <DailyForecast forecast={forecast} />
    </Provider>
  );
};

describe('Daily forecast', () => {
  it('should render component', () => {
    renderDailyForecast();
    const element = screen.getByTestId('dailyforecast');

    expect(element).toBeInTheDocument();
  });

  it('should render title and 5 list items correctly', () => {
    renderDailyForecast();

    expect(screen.getByText(/5 Days Forecast:/i)).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(5);
  });

  it('should render forecast data correctly', () => {
    renderDailyForecast();

    expect(screen.getByText(/21ºC/i)).toBeInTheDocument();
    expect(screen.getByText(/22ºC/i)).toBeInTheDocument();
    expect(screen.getByText(/23ºC/i)).toBeInTheDocument();
  });

  it('Should call <WeatherIcon/> with correct props', () => {
    renderDailyForecast();

    expect(WeatherIcon).toHaveBeenCalledWith(
      expect.objectContaining({
        width: '48px',
        heigth: '48px',
        weather: forecast.daily[1].weather[0],
      }),
      {}
    );
  });
});
