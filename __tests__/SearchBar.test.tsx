import React from 'react';
import { render, screen } from '@testing-library/react';
import plantsData from 'public/data/plantsData';
import userEvent from '@testing-library/user-event';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import SearchBar from 'components/Layout/Header/SearchBar/SearchBar';

describe('test SearchBar', () => {
  // const plants = plantsData;
  // const { id } = plants[0];
  // const user = userEvent.setup();

  function renderSearchBar() {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
  }

  it('renders the button correctly', () => {
    renderSearchBar();
    expect(screen.getByPlaceholderText(/Search for products/)).toBeInTheDocument();
  });
});
