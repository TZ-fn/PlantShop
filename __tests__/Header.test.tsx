import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'components/Layout/Header/Header';
import { Provider } from 'react-redux';
import { store } from 'store/store';

it('renders the header component correctly', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
  expect(screen.getByText('PlantShop')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});
