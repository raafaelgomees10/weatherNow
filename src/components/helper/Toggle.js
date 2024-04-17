import React, { useState } from 'react';
import styled from 'styled-components';
import LightBg from '../../assets/light.png';
import DarkBg from '../../assets/dark.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

export const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div data-testid="theme-toggle">
      <ModeToggle
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
  background-size: cover;
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
  background-size: cover;
  background-image: url(${({ $isChecked }) => ($isChecked ? Moon : Sun)});
  transform: translateX(${({ $isChecked }) => ($isChecked ? '60px' : 'unset')});
`;

const ModeToggle = styled.input`
  position: absolute;
`;
