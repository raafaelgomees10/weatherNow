import { act, render, screen } from '@testing-library/react';
import { ThemeToggle } from './Toggle';
import userEvent from '@testing-library/user-event';

describe('Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should render ThemeToggle and key isDarkMode must be null', () => {
    render(<ThemeToggle />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    expect(localStorage.getItem('isDarkMode')).toBeNull();
  });

  it('Should change isDarkMode key in localStorage when toggle is clicked', async () => {
    const setTheme = jest.fn();
    render(<ThemeToggle theme="light" setTheme={setTheme} />);

    const button = screen.getByTestId('button-theme-toggle');

    await userEvent.click(button);

    expect(localStorage.getItem('isDarkMode')).toBe('true');
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
