import { ReactElement } from 'react';
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
        {isWishlisted ? true : false}
      </Button>
    </div>
  );
}
