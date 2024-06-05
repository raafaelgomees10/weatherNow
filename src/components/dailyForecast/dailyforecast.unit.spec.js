import DailyForecast from '.';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { forecastMock } from '../../mocks/forecast';
import WeatherIcon from '../../utils/getWeatherIcon';
import { render, screen } from '@testing-library/react';

jest.mock('../../utils/getWeatherIcon', () => jest.fn(() => null));

const renderDailyForecast = () => {
  render(
    <Provider store={store}>
      <DailyForecast forecast={forecastMock} />
    </Provider>
  );
};

describe('Daily forecast', () => {
  it('Should render component', () => {
    renderDailyForecast();
    const element = screen.getByTestId('dailyforecast');

    expect(element).toBeInTheDocument();
  });

  it('Should render title and 5 list items correctly', () => {
    renderDailyForecast();

    expect(screen.getByText(/5 Days Forecast:/i)).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(5);
  });

  it('Should render forecast data correctly', () => {
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
        weather: forecastMock.daily[1].weather[0],
      }),
      {}
    );
  });
});
