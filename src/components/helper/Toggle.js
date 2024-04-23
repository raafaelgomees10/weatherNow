import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LightBg from '../../assets/light.png';
import DarkBg from '../../assets/dark.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

export const ThemeToggle = ({ theme, setTheme }) => {
  const [isDarkChecked, setIsDarkChecked] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  useEffect(() => {
    setIsDarkChecked(localStorage.getItem('isDarkMode') === 'true');
  }, [theme]);

  const handleToggleChange = () => {
    const newChecked = !isDarkChecked;
    localStorage.setItem('isDarkMode', newChecked);
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div data-testid="theme-toggle">
      <ModeToggle
        data-testid="button-theme-toggle"
        type="checkbox"
        id="mode-toggle"
        checked={isDarkChecked}
        onChange={handleToggleChange}
      />
      <Container>
        <Light data-testid="light-background" $isDarkChecked={isDarkChecked} />
        <Dark data-testid="dark-background" $isDarkChecked={isDarkChecked} />
        <Ball
          data-testid="mode-toggle"
          htmlFor="mode-toggle"
          $isDarkChecked={isDarkChecked}
        />
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
  opacity: ${({ $isDarkChecked }) => ($isDarkChecked ? '0' : '1')};
`;

const Dark = styled(Background)`
  background-image: url(${DarkBg});
  opacity: ${({ $isDarkChecked }) => ($isDarkChecked ? '1' : '0')};
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
  background-image: url(${({ $isDarkChecked }) => $isDarkChecked ? Moon : Sun});
  transform: translateX(${({ $isDarkChecked }) => ($isDarkChecked ? '60px' : 'unset')}
  );
`;

const ModeToggle = styled.input`
  position: absolute;
  opacity: 0;
`;
