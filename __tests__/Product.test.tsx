import React from 'react';
import { render, screen } from '@testing-library/react';
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

  let incrementButton: HTMLElement, decrementButton: HTMLElement, itemCount: HTMLElement;

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
});
