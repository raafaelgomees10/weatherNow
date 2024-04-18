import React from 'react';
import * as S from './styles';
import { Input } from '../helper/Input';
import { ReactComponent as Location } from '../../assets/location.svg';
import { ThemeToggle } from '../helper/Toggle';

const Header = ({ theme, setTheme }) => {
  return (
    <S.Container>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Input placeholder="Search for your preffered city" />
      <S.Button>
        <Location />
        Current Location
      </S.Button>
    </S.Container>
  );
};

export default Header;
