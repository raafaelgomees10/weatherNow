import { render, screen } from '@testing-library/react';
import { ThemeToggle } from './Toggle';

describe('Toggle', () => {
  it('should render Toggle', () => {
    render(<ThemeToggle />);

    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });
});
