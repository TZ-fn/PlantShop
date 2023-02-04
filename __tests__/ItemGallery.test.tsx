import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import plantsData from 'public/data/plantsData';
import ItemGallery from 'components/ItemGallery/ItemGallery';

describe('test the ItemGallery component', () => {
  const plants = plantsData;
  const { name } = plants[0];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  );

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <ItemGallery name={name} />
      </Provider>,
    );
    // waitFor(() => expect(screen.getAllByRole('img')).toHaveLength(9));
  });
});
