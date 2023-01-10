import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { updatePlantsData } from 'features/plants/plantsSlice';
import plantsData from 'public/data/plantsData';
import Product from 'components/ProductsList/Product/Product';

describe('test the Product component', () => {
  const plants = plantsData;
  const { id, name, image, price, description } = plants[0];
  const user = userEvent.setup();

  store.dispatch(updatePlantsData(plants));

  let incrementButton: HTMLButtonElement,
    decrementButton: HTMLButtonElement,
    itemCount: HTMLButtonElement,
    deleteButton: HTMLButtonElement;

  function renderProduct() {
    render(
      <Provider store={store}>
        <Product
          id={id}
          name={name}
          image={image}
          price={price}
          description={description}
          isInBasket
        />
      </Provider>,
    );
    incrementButton = screen.getByText('+');
    decrementButton = screen.getByText('-');
    itemCount = screen.getByRole('spinbutton');
    deleteButton = screen.getByText('Remove item from the basket');
  }

  it('renders correctly', () => {
    renderProduct();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(itemCount).toHaveValue(1);
  });

  it("increments product's quantity correctly", async () => {
    renderProduct();
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(itemCount).toHaveValue(3);
  });

  it("decrements product's quantity correctly", async () => {
    renderProduct();
    await user.click(decrementButton);
    expect(itemCount).toHaveValue(0);
  });

  it("changes product's quantity correctly", async () => {
    renderProduct();
    await user.click(itemCount);
    await user.keyboard('2');
    expect(itemCount).toHaveValue(12);
  });

  it('deletes the product correctly', async () => {
    renderProduct();
    await user.click(deleteButton);
    waitFor(() => expect(screen.getByText('Your basket is empty.')).toBeInTheDocument());
  });
});
