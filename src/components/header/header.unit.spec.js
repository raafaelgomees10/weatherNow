import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '../helper/Search';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import * as ReactRedux from 'react-redux';

const renderSearch = () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
};
describe('Input', () => {
  it('Should render a input type equals search', () => {
    renderSearch();

    expect(screen.getByRole('searchbox')).toHaveProperty('type', 'search');
  });

  it.todo('Should call dispatch() when form is submitted');

  it.todo(
    'Should call dispatch(fetchWeatherForecast()) when form is submitted'
  );
});
