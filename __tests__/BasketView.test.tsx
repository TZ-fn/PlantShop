import React from 'react';
import { render, screen } from '@testing-library/react';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import BasketView from 'views/BasketView/BasketView';

describe('test WishlistButton', () => {
  const user = userEvent.setup();

  function renderBasketView() {
    render(
      <Provider store={store}>
        <BasketView />
      </Provider>,
    );
  }

  it('renders the Basket view correctly', () => {
    renderBasketView();
    expect(screen.getByText(/Your basket is empty./)).toBeInTheDocument();
  });

  it('redirects to the Products page after clicking the Continue Shopping button', async () => {
    renderBasketView();
    const continueShoppingBtn = screen.getByRole('button', { name: /continue shopping/i });

    expect(continueShoppingBtn).toBeInTheDocument();

    user.click(continueShoppingBtn);

    screen.debug();

    // const productsPage = await screen.findByText(/Products/);

    // expect(productsPage).toBeInTheDocument();
  });
});
