import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCountBadge from 'components/elements/ProductCountBadge/ProductCountBadge';

describe('test ProductCountBadge', () => {
  it('renders quantity correctly, if fewer than 99 units', () => {
    render(<ProductCountBadge type='basket' quantity={33} />);
    expect(screen.getByText(33)).toBeInTheDocument();
  });

  it('renders quantity correctly, if more than 99 units', () => {
    render(<ProductCountBadge type='basket' quantity={100} />);
    expect(screen.getByText(/99+/i)).toBeInTheDocument();
  });
});
