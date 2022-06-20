import { ReactElement } from 'react';
import Button from '../Button/Button';
import styles from './FavouritesButton.module.scss';

interface FavouritesButtonProps {}

export default function FavouritesButton({}: FavouritesButtonProps): ReactElement {
  function handleAddingToFavourites() {}

  return (
    <div className={styles.buttonContainer}>
      <Button
        className={styles.innerButton}
        aria-label='Add this product to favourites'
        type='button'
        onClick={handleAddingToFavourites}
      >
        ♥
      </Button>
    </div>
  );
}
