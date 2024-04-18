import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { GET_WEATHER_CITY, GET_WEATHER_FORECAST } from '../../api/api';
import useFetch from '../../hooks/useFetch';

export const Search = ({ doSearch }) => {
  const [city, setCity] = useState('');
  const { request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    doSearch(city);

    // Realiza a primeira request para obter os dados da cidade
    const { url: cityUrl, options: cityOptions } = GET_WEATHER_CITY(city);
    const { json: cityData } = await request(cityUrl, cityOptions);

    if (cityData) {
      // Obtém as coordenadas da cidade
      const { lat, lon } = cityData.coord;
      // Realiza a segunda request para obter a previsão do tempo com base nas coordenadas
      const { url: forecastUrl, options: forecastOptions } =
        GET_WEATHER_FORECAST(lat, lon);
      const { json: forecastData } = await request(
        forecastUrl,
        forecastOptions
      );
    }
  };

  const handleInput = (e) => {
    setCity(e.target.value);

    if (e.target.value === '') {
      doSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} name="search-form">
      <Wrapper>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <SearchInput
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
