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

  function renderWishlistButton() {
    render(
      <Provider store={store}>
        <WishlistButton id={id} isBlockButton />
      </Provider>,
    );
  }

  it('renders the button correctly', () => {
    renderWishlistButton();
    expect(screen.getByText(/Add this item to the wishlist/)).toBeInTheDocument();
  });

  it('adds and removes the product to the wishlist correctly', async () => {
    renderWishlistButton();

    const addToTheWishlist = screen.getByText(/Add this item to the wishlist/);

    user.click(addToTheWishlist);
    const removeFromTheWishlist = await screen.findByText(/Remove this item from the wishlist/);
    expect(removeFromTheWishlist).toBeInTheDocument();

    user.click(removeFromTheWishlist);

    expect(addToTheWishlist).toBeInTheDocument();
  });
});
