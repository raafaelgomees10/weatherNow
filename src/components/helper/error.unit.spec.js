import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { render, screen } from '@testing-library/react';
import Error from './Error';

const renderError = () => {
  return render(
    <Provider store={store}>
      <Error />
    </Provider>
  );
};

describe('Error', () => {
  it('Should render Error', () => {
    renderError();

    expect(screen.getByTestId('error')).toBeInTheDocument();
  });
});
