import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from 'components/Layout/Footer/Footer';

it('renders the header component correctly', () => {
  render(<Footer />);
  expect(screen.getByText('PlantShop')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});
