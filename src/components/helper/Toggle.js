import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LightBg from '../../assets/light.png';
import DarkBg from '../../assets/dark.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

export const ThemeToggle = ({ theme, setTheme }) => {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  useEffect(() => {
    setIsChecked(localStorage.getItem('isDarkMode') === 'true');
  }, [theme]);

  const handleToggleChange = () => {
    const newChecked = !isChecked;
    localStorage.setItem('isDarkMode', newChecked);
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div data-testid="theme-toggle">
      <ModeToggle
        data-testid="button-theme-toggle"
        type="checkbox"
        id="mode-toggle"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <Container>
        <Light $isChecked={isChecked}></Light>
        <Dark $isChecked={isChecked}></Dark>
        <Ball htmlFor="mode-toggle" $isChecked={isChecked}></Ball>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 38px;
  display: flex;
  align-items: center;
  padding-top: 5px;
  margin-top: -5px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  transition: opacity 0.5s ease;
`;

const Light = styled(Background)`
  background-image: url(${LightBg});
  opacity: ${({ $isChecked }) => ($isChecked ? '0' : '1')};
`;

const Dark = styled(Background)`
  background-image: url(${DarkBg});
  opacity: ${({ $isChecked }) => ($isChecked ? '1' : '0')};
`;

const Ball = styled.label`
  height: 30px;
  width: 30px;
  margin-top: 3px;
  position: relative;
  z-index: 10;
  border-radius: 50%;
  margin-left: 6px;
  cursor: pointer;
  transition: transform 0.5s;
  background-size: contain;
  background-image: url(${({ $isChecked }) => ($isChecked ? Moon : Sun)});
  transform: translateX(${({ $isChecked }) => ($isChecked ? '60px' : 'unset')});
`;

const ModeToggle = styled.input`
  position: absolute;
  opacity: 0;
`;
