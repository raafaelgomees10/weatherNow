import React from 'react';
import { Search } from './Search';
import store from '../../store/configureStore';
import { Provider, useDispatch } from 'react-redux';
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

describe('Search Input', () => {
  it('Should render a input type equals search', () => {
    renderSearch();

    expect(screen.getByRole('searchbox')).toHaveProperty('type', 'search');
  });

  it('Should call dispatch() with a function as parameter when form is submitted', async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    renderSearch();

    // const inputText = 'some text here';
    // const input = screen.getByRole('searchbox');
    const form = screen.getByRole('form');

    // await userEvent.type(input, inputText);
    await fireEvent.submit(form);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
  });
});
