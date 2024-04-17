import { useEffect, useState } from 'react';
import Header from './components/header';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './globalStyles';

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const fetchData = async () => {
      const key = '4047b58fb1e1a0ed1675131eaabed905';
      const city = 'extrema';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      const data = await response.json();
    };
    fetchData();
  }, []);

  const toggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="container">
        <GlobalStyles />
        <Header />
        <button onClick={() => toggle()}>Change Theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
