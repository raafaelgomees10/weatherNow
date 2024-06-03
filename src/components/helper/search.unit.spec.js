import React from 'react';
import { Search } from './Search';
import store from '../../store/configureStore';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../../store/weatherSlice';
import { fireEvent, render, screen } from '@testing-library/react';

const renderSearch = () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('../../store/weatherSlice', () => ({
  fetchWeatherForecast: jest.fn(),
}));

describe('Search Input', () => {
  it('Should render a input type equals search', () => {
    renderSearch();

    expect(screen.getByRole('searchbox')).toHaveProperty('type', 'search');
  });

  it('Should update city state when input changes', async () => {
    renderSearch();
    const city = 'Extrema';
    const searchInput = screen.getByRole('searchbox');

    await userEvent.type(searchInput, city);

    expect(searchInput.value).toBe(city);
  });

  it('Should set city state to an empty string when no value is passed', async () => {
    renderSearch();
    const searchInput = screen.getByRole('searchbox');

    fireEvent.input(searchInput, { target: { value: '' } });

    expect(searchInput.value).toBe('');
  });

  it('Should not submit when city is empty', async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    renderSearch();
    const form = screen.getByRole('form');

    const searchInput = screen.getByTestId('searchbox');

    searchInput.value = '';
    fireEvent.submit(form);

    expect(fetchWeatherForecast).not.toHaveBeenCalled();
  });

  it('Should call dispatch() with a function as parameter when form is submitted', async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    renderSearch();

    const city = 'Extrema';
    const searchInput = screen.getByRole('searchbox');
    const form = screen.getByRole('form');

    await userEvent.type(searchInput, city);
    await fireEvent.submit(form);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(
      fetchWeatherForecast({ city: city })
    );
  });
});
