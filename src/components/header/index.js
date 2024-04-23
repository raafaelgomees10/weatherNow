import React from 'react';
import * as S from './styles';
import { Search } from '../helper/Search';
import { ReactComponent as Location } from '../../assets/location.svg';
import { ThemeToggle } from '../helper/Toggle';
import { fetchWeatherForecast } from '../../store/weatherSlice';
import { useDispatch } from 'react-redux';

const Header = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(getPosition);
  };

  async function getPosition(position) {
    dispatch(
      fetchWeatherForecast({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    );
  }

  return (
    <S.Container data-testid="header">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Search />
      <S.Button onClick={handleClick}>
        <Location />
        Current Location
      </S.Button>
    </S.Container>
  );
};

export default Header;
