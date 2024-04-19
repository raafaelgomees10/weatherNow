import { useState } from 'react';
import Header from './components/header';
import { useSelector } from 'react-redux';
import { GlobalStyles } from './globalStyles';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState('light');
  useSelector((state) => state.weatherForecast.data);

  return (
    <ThemeProvider
      theme={
        localStorage.getItem('isDarkMode') === 'true' ? darkTheme : lightTheme
      }
    >
      <GlobalStyles />
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
