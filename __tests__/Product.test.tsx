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

  const incrementButton = screen.getByText('-');
  const decrementButton = screen.getByText('+');
  const itemCount = screen.getByRole('spinbutton');

  it('renders correctly', () => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("increments and decrements product's quantity correctly", () => {
    user.click(incrementButton);
    expect(itemCount).toHaveValue(2);
  });
});
