import HourlyForecast from '.';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { forecastMock } from '../../mocks/forecast';
import { render, screen } from '@testing-library/react';
import { convertTimestampToDate } from '../../utils/getDateAndTime';

const renderHourlyForecast = () => {
  render(
    <Provider store={store}>
      <HourlyForecast forecast={forecastMock} />
    </Provider>
  );
};

describe('HourlyForecast', () => {
  it('Should render component', () => {
    renderHourlyForecast();

    expect(screen.getByTestId('hourlyforecast')).toBeInTheDocument();
  });

  it('Should render title and list items correctly', () => {
    const selectedHours = [];

    // Encontrar os 5 timestamps mais próximos, com intervalo de 3 horas
    for (let i = 0; i < forecastMock?.hourly.length; i++) {
      const hourlyObjectData = forecastMock?.hourly[i];

      const date = convertTimestampToDate(
        hourlyObjectData.dt,
        forecastMock?.timezone_offset
      );

      // Verificar se a hora está dentro do intervalo desejado
      if (date.getHours() % 3 === 0) {
        selectedHours.push(hourlyObjectData);
      }

      if (selectedHours.length === 5) {
        break;
      }
    }

    renderHourlyForecast();
    expect(screen.getByText(/Hourly Forecast:/i)).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(selectedHours.length);
  });
});
