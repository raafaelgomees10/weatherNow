import { render, screen } from '@testing-library/react';
import LocalTime from '.';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';

const renderLocalTime = () => {
  render(
    <Provider store={store}>
      <LocalTime />
    </Provider>
  );
};

describe('LocalTime', () => {
  renderLocalTime();
  it('Should render component', () => {
    const cityElement = screen.getByTestId('localime');

    expect(cityElement).toBeInTheDocument();
  });
});
