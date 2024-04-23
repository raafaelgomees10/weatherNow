import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../../store/weatherSlice';

export const Search = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (city.trim() !== '') {
    dispatch(fetchWeatherForecast({ city: city }));
    // }
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
          <SearchIcon />
        </IconContainer>
        <SearchInput
          data-testid="searchbox"
          value={city}
          onInput={handleInput}
          type="search"
          placeholder="Search"
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
  /* transition: all 0.2s ease;

  &:focus-within {
    background-color: #202020;
    border-color: #ee171f;
  } */
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 40px;
  font-size: 2rem;
  padding: 8px 16px 8px 52px;
  border: 1px solid #000;
  background: #d9d9d9;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    border: 1px solid #000;
    outline: none;
  }
`;

const IconContainer = styled.div`
  left: 16px;
  position: absolute;
  &:hover {
    outline: none;
  }
`;
