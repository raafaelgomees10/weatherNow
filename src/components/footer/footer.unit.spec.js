import Footer from '.';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { render, screen } from '@testing-library/react';

const renderFooter = () => {
  return render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
};

describe('Footer', () => {
  it('Should render footer', () => {
    renderFooter();

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
