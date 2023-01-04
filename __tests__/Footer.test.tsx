import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from 'components/Layout/Footer/Footer';

it('renders the Footer component correctly', () => {
  render(<Footer />);
  expect(screen.getAllByText('PlantShop')).toHaveLength(2);
});
