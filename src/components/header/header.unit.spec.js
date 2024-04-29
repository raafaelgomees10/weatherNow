import Header from '.';
import store from '../../store/configureStore';
import { Provider, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { fetchWeatherForecast } from '../../store/weatherSlice';

const renderHeader = () => {
  return render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('../../store/weatherSlice', () => ({
  fetchWeatherForecast: jest.fn(),
}));

describe('Header', () => {
  it('Should render header', () => {
    renderHeader();

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('Should call getCurrentPosition() and then dispatch fetchWeatherForecast() action after clicking the button', () => {
    const mockGetCurrentPosition = jest.fn();

    const originalGeolocation = global.navigator.geolocation;
    global.navigator.geolocation = {
      ...originalGeolocation,
      getCurrentPosition: mockGetCurrentPosition,
    };

    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    renderHeader();

    const button = screen.getByText(/current location/i);
    userEvent.click(button);

    expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);

    const fakePosition = {
      coords: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    };

    //simulando a chamada do getCurretnPosition
    mockGetCurrentPosition.mock.calls[0][0](fakePosition);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(
      fetchWeatherForecast({
        lat: fakePosition.coords.latitude,
        lon: fakePosition.coords.longitude,
      })
    );
  });
});
