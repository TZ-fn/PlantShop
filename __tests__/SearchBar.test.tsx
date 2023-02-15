import React from 'react';
import { render, screen } from '@testing-library/react';
import plantsData from 'public/data/plantsData';
import userEvent from '@testing-library/user-event';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { updatePlantsData } from 'features/plants/plantsSlice';
import SearchBar from 'components/Layout/Header/SearchBar/SearchBar';

describe('test SearchBar', () => {
  const plants = plantsData;
  store.dispatch(updatePlantsData(plants));

  const user = userEvent.setup();

  function renderSearchBar() {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });

    return { searchInput, searchButton };
  }

  it('renders the search bar correctly', () => {
    const { searchInput, searchButton } = renderSearchBar();

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('shows the autocomplete items correctly', async () => {
    const { searchInput } = renderSearchBar();

    await user.type(searchInput, 'ca');

    // look for plants that have "ca" in their names
    expect(await screen.findByText(/Zamioculcas/)).toBeInTheDocument();
    expect(await screen.findByText(/Dracaena/)).toBeInTheDocument();
    expect(await screen.findByText(/Calathea/)).toBeInTheDocument();
  });

  it('shows the autocomplete errors correctly', async () => {
    const { searchInput } = renderSearchBar();

    await user.type(searchInput, 'c');

    // look for "query too short" error
    expect(await screen.findByText(/Please enter at least 2 letters.../)).toBeInTheDocument();

    await user.type(searchInput, 'ccccc');

    // look for "no items found" error
    expect(await screen.findByText(/No results found.../)).toBeInTheDocument();
  });

  it('handles key presses correctly', async () => {
    const { searchInput } = renderSearchBar();

    await user.type(searchInput, 'ca');

    // pressing arrow down should set the input value to the first autocomplete option
    await user.type(searchInput, '{arrowDown}');
    expect(searchInput).toHaveValue('Zamioculcas');

    // pressing arrow down second time should set the input value to the second autocomplete option
    await user.type(searchInput, '{arrowDown}');
    expect(searchInput).toHaveValue('Dracaena');

    // pressing arrow up two times should set the input value to the original inputted text
    await user.type(searchInput, '{arrowUp}');
    await user.type(searchInput, '{arrowUp}');
    expect(searchInput).toHaveValue('ca');
  });
});
