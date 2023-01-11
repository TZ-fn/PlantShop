import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from 'store/store';
import plantsData from 'public/data/plantsData';
import Card from 'components/elements/Card/Card';

it('renders the Card component correctly', () => {
  const plants = plantsData;
  const { id, name, image, price, description } = plants[0];

  const user = userEvent.setup();

  render(
    <Provider store={store}>
      <Card id={id} name={name} image={image} description={description} price={price} />
    </Provider>,
  );
  expect(screen.getByText(name)).toBeInTheDocument();
});
