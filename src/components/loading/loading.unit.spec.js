import Loading from '.';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { render, screen } from '@testing-library/react';
import useMedia from '../../Hooks/useMedia';

jest.mock('../../Hooks/useMedia');
describe('HourlyForecast', () => {
  const renderLoading = () => {
    render(
      <Provider store={store}>
        <Loading />
      </Provider>
    );
  };

  it('Should render loading', () => {
    useMedia.mockReturnValue(false);
    renderLoading();

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('Should render extra texts for tablet screen size', () => {
    useMedia.mockReturnValue(true);
    renderLoading();

    const weatherConditions = screen.getByTestId('weather-conditions');

    const totalTexts = weatherConditions.querySelectorAll('div');

    expect(totalTexts.length).toBeGreaterThan(13);
  });

  it('Should not render extra texts for non-tablet screen size', () => {
    useMedia.mockReturnValue(false);
    renderLoading();

    const weatherConditions = screen.getByTestId('weather-conditions');

    const totalTexts = weatherConditions.querySelectorAll('div');

    expect(totalTexts.length).toBeLessThan(7);
  });
});
