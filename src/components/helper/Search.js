import React, { useState } from 'react';
import Icon from '../../icons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../../store/weatherSlice';

export const Search = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      dispatch(fetchWeatherForecast({ city: city }));
    }
  };

  const handleInput = (e) => {
    setCity(e.target.value);

    if (e.target.value === '') {
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} name="search-form">
      <Wrapper>
        <IconContainer>
          <Icon icon="search" height="24px" width="24px" />
        </IconContainer>
        <SearchInput
          data-testid="searchbox"
          value={city}
          onInput={handleInput}
          type="search"
          placeholder="Search for your preffered city..."
        />
      </Wrapper>
    </form>
  );
};

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  background-color: transparent;
  position: relative;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 40px;
  font-size: 2rem;
  padding: 8px 16px 8px 52px;
  border: 1px solid black;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font};
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  font-weight: 300;

  &:hover,
  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 8px;
  &:hover {
    outline: none;
  }

  @media (max-width: 767px) {
    top: 6px;
  }
`;
