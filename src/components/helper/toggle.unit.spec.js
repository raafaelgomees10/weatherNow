import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeToggle } from './Toggle';
import userEvent from '@testing-library/user-event';

const setTheme = jest.fn();

describe('Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should render ThemeToggle', () => {
    render(<ThemeToggle theme="light" setTheme={setTheme} />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });

  it('Should call setTheme when toggle is clicked', async () => {
    render(<ThemeToggle theme="light" setTheme={setTheme} />);

    const button = screen.getByTestId('button-theme-toggle');

    await userEvent.click(button);

    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith(expect.any(Function));
  });

  it('Should toggle theme every time is clicked', async () => {
    render(<ThemeToggle theme="light" setTheme={setTheme} />);

    const button = screen.getByTestId('button-theme-toggle');
    let setThemeCallback;

    await userEvent.click(button);
    setThemeCallback = setTheme.mock.calls[0][0];
    expect(setThemeCallback('light')).toBe('dark');

    await userEvent.click(button);
    setThemeCallback = setTheme.mock.calls[1][0]; // A chamada anterior está em mock.calls[0]
    expect(setThemeCallback('dark')).toBe('light');

    await userEvent.click(button);
    setThemeCallback = setTheme.mock.calls[2][0]; //terceira chamada
    expect(setThemeCallback('light')).toBe('dark');
  });

  it('Should render ThemeToggle with css propierts to LIGHT mode', () => {
    render(<ThemeToggle theme="light" setTheme={setTheme} />);

    const lightBackground = screen.getByTestId('light-background');
    const darkBackground = screen.getByTestId('dark-background');
    const ball = screen.getByTestId('mode-toggle');

    expect(lightBackground).toHaveStyle('opacity: 1');
    expect(darkBackground).toHaveStyle('opacity: 0');
    expect(ball).toHaveStyle('transform: translateX(unset)');
  });

  // fit('Should render ThemeToggle with css propierts to DARK mode', async () => {
  //   render(<ThemeToggle theme="dark" setTheme={setTheme} />);
  //   const button = screen.getByTestId('button-theme-toggle');
  //   await userEvent.click(button);

  //   const lightBackground = screen.getByTestId('light-background');
  //   const darkBackground = screen.getByTestId('dark-background');
  //   const ball = screen.getByTestId('mode-toggle');

  //   await waitFor(() => {
  //     expect(lightBackground).toHaveStyle('opacity: 0');
  //   });
  // });
});
