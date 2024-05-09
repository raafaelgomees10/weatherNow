import React from 'react';
import styled from 'styled-components';
import Sun from '../../assets/sunButton.png';
import Moon from '../../assets/moonButton.png';
import DarkBg from '../../assets/dark.png';
import LightBg from '../../assets/light.png';
import { toggleTheme } from '../../store/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div data-testid="theme-toggle">
      <ModeToggle
        type="checkbox"
        checked={isDarkMode}
        id="button-mode-toggle"
        onChange={handleToggleChange}
        data-testid="button-theme-toggle"
      />
      <Container>
        <Light data-testid="light-background" $isDarkMode={isDarkMode} />
        <Dark data-testid="dark-background" $isDarkMode={isDarkMode} />
        <Ball
          $isDarkMode={isDarkMode}
          data-testid="mode-toggle"
          htmlFor="button-mode-toggle"
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
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? '0' : '1')};
`;

const Dark = styled(Background)`
  background-image: url(${DarkBg});
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? '1' : '0')};
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
  background-image: url(${({ $isDarkMode }) => ($isDarkMode ? Moon : Sun)});
  transform: translateX(
    ${({ $isDarkMode }) => ($isDarkMode ? '60px' : 'unset')}
  );
`;

const ModeToggle = styled.input`
  position: absolute;
  opacity: 0;
`;
