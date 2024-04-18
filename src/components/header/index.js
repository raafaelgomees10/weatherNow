import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Search } from '../helper/Search';
import { ReactComponent as Location } from '../../assets/location.svg';
import { ThemeToggle } from '../helper/Toggle';
import useFetch from '../../hooks/useFetch';
import { GET_WEATHER_FORECAST } from '../../api/api';

const Header = ({ theme, setTheme }) => {
  const [city, setCity] = useState('');
  const { request } = useFetch();
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(getPosition);
  };

  async function getPosition(position) {
    const { url, options } = GET_WEATHER_FORECAST(
      position.coords.latitude,
      position.coords.longitude
    );
    await request(url, options);
  }

  return (
    <S.Container>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Search doSearch={(city) => setCity(city)} />
      <S.Button onClick={handleClick}>
        <Location />
        Current Location
      </S.Button>
    </S.Container>
  );
};

export default Header;
