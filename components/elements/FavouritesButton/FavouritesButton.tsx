import { ReactElement } from 'react';
import Image from 'next/image';
import WishlistIcon from 'public/icons/wishlistIcon.svg';
import WishlistIconEmpty from 'public/icons/wishlistIconEmpty.svg';
import Button from '../Button/Button';
import styles from './FavouritesButton.module.scss';

interface FavouritesButtonProps {
  isWishlisted: boolean;
}

export default function FavouritesButton({ isWishlisted }: FavouritesButtonProps): ReactElement {
  function handleAddingToFavourites() {}

  return (
    <div className={styles.buttonContainer}>
      <Button
        className={styles.innerButton}
        aria-label='Add this product to favourites'
        type='button'
        onClick={handleAddingToFavourites}
      >
        {isWishlisted ? (
          <span>
            <span className='visually-hidden'>Remove this item from the wishlist</span>
            <Image src={WishlistIcon.src} width={50} height={50} />
          </span>
        ) : (
          <span>
            <Image src={WishlistIconEmpty.src} width={50} height={50} />
            <span className='visually-hidden'>Remove this item from the wishlist</span>
          </span>
        )}
      </Button>
    </div>
  );
}
