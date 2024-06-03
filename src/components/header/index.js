import React from 'react';
import * as S from './styles';
import Icon from '../../icons';
import { Search } from '../helper/Search';
import { useDispatch } from 'react-redux';
import { ThemeToggle } from '../helper/Toggle';
import { fetchWeatherForecast } from '../../store/weatherSlice';

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
        <Icon icon="location" height="32px" width="32px" />
        Current Location
      </S.Button>
    </S.Container>
  );
};

export default Header;
