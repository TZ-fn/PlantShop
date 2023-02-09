import React from 'react';
import { render, screen } from '@testing-library/react';
import plantsData from 'public/data/plantsData';
import userEvent from '@testing-library/user-event';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import WishlistButton from 'components/elements/WishlistButton/WishlistButton';

describe('test WishlistButton', () => {
  const plants = plantsData;
  const { id } = plants[0];
  const user = userEvent.setup();

  it('renders the button correctly', () => {
    render(
      <Provider store={store}>
        <WishlistButton id={id} isBlockButton />
      </Provider>,
    );
    expect(screen.getByText(/Add this item to the wishlist/)).toBeInTheDocument();
  });
});
