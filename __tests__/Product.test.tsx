import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { updatePlantsData } from 'features/plants/plantsSlice';
import plantsData from 'public/data/plantsData';
import Product from 'components/ProductsList/Product/Product';

describe('test the Product component', () => {
  const plants = plantsData;
  const { id, name, image, price, description } = plants[0];

  store.dispatch(updatePlantsData(plants));

  render(
    <Provider store={store}>
      <Product id={id} name={name} image={image} price={price} description={description} />
    </Provider>,
  );

  it('renders correctly', () => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
