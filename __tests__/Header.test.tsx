import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'components/Layout/Header/Header';
import { Provider } from 'react-redux';
import { store } from 'store/store';

it('renders the main component', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
  expect(screen.getByText('PlantShop')).toBeInTheDocument();
});
