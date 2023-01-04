import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Header from 'components/Layout/Header/Header';

it('renders the Header component correctly', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
  expect(screen.getByText('PlantShop')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});
