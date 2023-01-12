import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from 'store/store';
import plantsData from 'public/data/plantsData';
import Card from 'components/elements/Card/Card';

const plants = plantsData;
const { id, name, image, price, description } = plants[0];

const basket = store.getState().basket.products;

const user = userEvent.setup();

function renderCard() {
  render(
    <Provider store={store}>
      <Card id={id} name={name} image={image} description={description} price={price} />
    </Provider>,
  );
}

describe('', () => {
  it('renders the Card component correctly', () => {
    renderCard();

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('adds product to the basket correctly', () => {
    renderCard();

    const addToBasketBtn = screen.getByTestId('basket');

    user.click(addToBasketBtn);
  });
});
