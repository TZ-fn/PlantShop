import { ReactElement } from 'react';
import Button from '../Button/Button';
import styles from './FavouritesButton.module.scss';

interface FavouritesButtonProps {
  isEmpty: boolean;
}

export default function FavouritesButton({ isEmpty }: FavouritesButtonProps): ReactElement {
  function handleAddingToFavourites() {}

  return (
    <div className={styles.buttonContainer}>
      <Button
        className={styles.innerButton}
        aria-label='Add this product to favourites'
        type='button'
        onClick={handleAddingToFavourites}
      >
        {isEmpty ? 'empty' : 'notempty'}
      </Button>
    </div>
  );
}
