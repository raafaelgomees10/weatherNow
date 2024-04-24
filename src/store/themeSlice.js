import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: localStorage.getItem('isDarkMode') === 'true' ? true : false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', state.isDarkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
