import { useEffect, useState } from 'react';
import Header from './components/header';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './globalStyles';

function App() {
  const [theme, setTheme] = useState('light');

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
