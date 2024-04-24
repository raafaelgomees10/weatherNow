import Header from './components/header';
import { useSelector } from 'react-redux';
import { GlobalStyles } from './globalStyles';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  useSelector((state) => state.weatherForecast.data);
  useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider
      theme={
        localStorage.getItem('isDarkMode') === 'true' ? darkTheme : lightTheme
      }
    >
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
