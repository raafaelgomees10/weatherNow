import WeatherDetails from '.';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { forecastMock } from '../../mocks/forecast';
import WeatherIcon from '../../utils/getWeatherIcon';
import { render, screen } from '@testing-library/react';

jest.mock('../../utils/getWeatherIcon', () => jest.fn(() => null));

const renderWeatherDetails = () => {
  render(
    <Provider store={store}>
      <WeatherDetails forecast={forecastMock} />
    </Provider>
  );
};

describe('Weather Details', () => {
  it('Should render component and details container', () => {
    renderWeatherDetails();

    expect(screen.getByTestId('weather-details')).toBeInTheDocument();
    expect(screen.getByTestId('details-container')).toBeInTheDocument();
  });

  it('Should render description condition', () => {
    renderWeatherDetails();

    expect(screen.getByText(/Broken Clouds/i)).toBeInTheDocument();
  });

  it('Should call <WeatherIcon/> with correct props', () => {
    renderWeatherDetails();

    expect(WeatherIcon).toHaveBeenCalledWith(
      expect.objectContaining({
        width: '180px',
        height: '180px',
        weather: forecastMock.current.weather[0],
      }),
      {}
    );
  });
});
