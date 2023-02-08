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

  async function openGalleryModal(imageToBeClicked) {
    const allImages = await screen.findAllByRole('img');

    await user.click(allImages[imageToBeClicked]);

    const nextPhotoBtn = await screen.findByRole('button', { name: />>/i });
    const prevPhotoBtn = await screen.findByRole('button', { name: /<</i });

    return { nextPhotoBtn, prevPhotoBtn };
  }

  // replace the window.scrollTo() function by a mock to remove Jest errors
  window.scrollTo = jest.fn();

  it('renders correctly', async () => {
    renderItemGallery();
    expect(await screen.findAllByRole('img')).toHaveLength(9);
  });

  it('modal works correctly', async () => {
    renderItemGallery();
    const { nextPhotoBtn, prevPhotoBtn } = await openGalleryModal(0);

    // look for modal navigation's buttons
    expect(nextPhotoBtn).toBeInTheDocument();
    expect(prevPhotoBtn).toBeInTheDocument();

    // check if the "Previous image" button is disabled, as the first image was clicked"
    expect(prevPhotoBtn).toBeDisabled();
  });

  it('disables the "Next image" button if the last image was clicked', async () => {
    renderItemGallery();
    const { nextPhotoBtn } = await openGalleryModal(8);

    // check if the "Next image" button is disabled, as the last image was clicked"
    expect(nextPhotoBtn).toBeDisabled();
  });
});
