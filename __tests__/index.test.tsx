import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

it('renders the main component', () => {
  render(<Home />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});
