import { render, screen } from '@testing-library/react';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createRouterMock } from './mocked-data/createRouterMock';
import BasketView from 'views/BasketView/BasketView';

const router = createRouterMock();

describe('test WishlistButton', () => {
  const user = userEvent.setup();

  function renderBasketView() {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <BasketView />
        </Provider>
      </RouterContext.Provider>,
    );
  }

  it('renders the Basket view correctly', () => {
    renderBasketView();
    expect(screen.getByRole('heading', { name: /basket/i })).toBeInTheDocument();
  });

  it('renders the price correctly', () => {
    renderBasketView();
    expect(screen.getByText(/0.00/)).toBeInTheDocument();
  });

  it('redirects to the Products page after clicking the Continue Shopping button', async () => {
    renderBasketView();
    const continueShoppingBtn = screen.getByRole('button', { name: /continue shopping/i });

    expect(continueShoppingBtn).toBeInTheDocument();

    await user.click(continueShoppingBtn);

    // 2x expect.anything() is needed to mock additional router arguments
    expect(router.push).toHaveBeenCalledWith(`/products`, expect.anything(), expect.anything());
  });
});
