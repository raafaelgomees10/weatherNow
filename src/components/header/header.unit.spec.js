import { fireEvent, render, screen } from '@testing-library/react';
import Header from '.';
import { Provider, useDispatch } from 'react-redux';
import store from '../../store/configureStore';

const renderHeader = () => {
  return render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

// Substitua o useDispatch original pelo mockDispatch
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Header', () => {
  it('Should render header', () => {
    renderHeader();

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should call navigator.geolocation.getCurrentPosition() after clicking the button', async () => {
    const mockGetCurrentPosition = jest.fn();

    const originalGeolocation = global.navigator.geolocation;
    global.navigator.geolocation = {
      ...originalGeolocation,
      getCurrentPosition: mockGetCurrentPosition,
    };

    renderHeader();

    const button = screen.getByRole('button', { name: /current location/i });

    await fireEvent.click(button);

    expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
  });
});
