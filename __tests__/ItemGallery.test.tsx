import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from 'store/store';
import plantsData from 'public/data/plantsData';
import ItemGallery from 'components/ItemGallery/ItemGallery';
import { unsplashData } from './mocked-data/mocked-unsplash-data';

describe('test the ItemGallery component', () => {
  const plants = plantsData;
  const { name } = plants[0];
  const user = userEvent.setup();

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(unsplashData),
    }),
  ) as jest.Mock;

  function renderItemGallery() {
    render(
      <Provider store={store}>
        <ItemGallery name={name} />
      </Provider>,
    );
  }

  it('renders correctly', async () => {
    renderItemGallery();
    expect(await screen.findAllByRole('img')).toHaveLength(9);
  });

  it('modal works correctly', async () => {
    renderItemGallery();

    const allImages = await screen.findAllByRole('img');
    const firstImage = allImages[0];

    await user.click(firstImage);

    const nextPhotoBtn = await screen.findByRole('button', { name: />>/i });
    const prevPhotoBtn = await screen.findByRole('button', { name: /<</i });

    // look for modal navigation's buttons
    expect(nextPhotoBtn).toBeInTheDocument();
    expect(prevPhotoBtn).toBeInTheDocument();
  });
});
