import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from 'store/store';
import plantsData from 'public/data/plantsData';
import Card from 'components/elements/Card/Card';

const plants = plantsData;
const { id, name, image, price, description } = plants[0];

const user = userEvent.setup();

function renderCard() {
  render(
    <Provider store={store}>
      <Card id={id} name={name} image={image} description={description} price={price} />
    </Provider>,
  );
}

function getBasketProduct() {
  return store.getState().basket.products[0];
}

function getWishlistProduct() {
  return store.getState().wishlist.products[0];
}

describe('', () => {
  it('renders the Card component correctly', () => {
    renderCard();

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('adds product to the basket correctly', async () => {
    renderCard();

    const addToBasketBtn = screen.getByText('Add to basket');

    await user.click(addToBasketBtn);
    await user.click(addToBasketBtn);

    const basketProduct = getBasketProduct();

    expect(basketProduct.id).toBe(id);
    expect(basketProduct.quantity).toBe(2);
  });

  it('adds product to the wishlist correctly', async () => {
    renderCard();

    const addToWishlistBtn = screen.getByText('Add this item to the wishlist');

    await user.click(addToWishlistBtn);

    const wishlistProduct = getWishlistProduct();

    expect(wishlistProduct).toBe(id);
  });
});
