import { ThemeToggle } from './Toggle';
import { Provider, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import store from '../../store/configureStore';
import { toggleTheme } from '../../store/themeSlice';

const renderToggle = () => {
  render(
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../store/themeSlice', () => ({
  toggleTheme: jest.fn(),
}));

describe('Toggle', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('Should render ThemeToggle', () => {
    renderToggle();
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });

  it('Should call dispatch(toggleTheme()) when button is clicked', async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    renderToggle();

    const button = screen.getByTestId('button-theme-toggle');

    await userEvent.click(button);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(toggleTheme());
  });

  it.todo('Should change css properties when button is clicked');
});
