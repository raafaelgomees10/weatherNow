import { useEffect } from 'react';
import './App.css';
import Header from './components/header';
function App() {
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
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
