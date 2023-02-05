import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import plantsData from 'public/data/plantsData';
import ItemGallery from 'components/ItemGallery/ItemGallery';
import { unsplashData } from './mocked-data/mocked-unsplash-data';

describe('test the ItemGallery component', () => {
  const plants = plantsData;
  const { name } = plants[0];

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(unsplashData),
    }),
  ) as jest.Mock;

  it('renders correctly', async () => {
    render(
      <Provider store={store}>
        <ItemGallery name={name} />
      </Provider>,
    );

    expect(await screen.findAllByRole('img')).toHaveLength(9);
  });
});
