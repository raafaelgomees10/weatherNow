import themeReducer, { toggleTheme } from './themeSlice';

describe('themeSlice', () => {
  it('Should toggle isDarkMode', () => {
    const initialState = {
      isDarkMode: false,
    };

    const newState = themeReducer(initialState, toggleTheme());

    expect(newState.isDarkMode).toBe(true);
  });
});
