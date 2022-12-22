import { ReactElement, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from 'store/store';
import { addToWishlist, removeFromWishlist } from 'features/wishlist/wishlistSlice';
import WishlistIcon from 'public/icons/wishlistIcon.svg';
import WishlistIconEmpty from 'public/icons/wishlistIconEmpty.svg';
import Button from '../Button/Button';
import { Product } from 'types/types';
import styles from './FavouritesButton.module.scss';

interface FavouritesButtonProps {
  id: string;
  isBlockButton: boolean;
}

export default function FavouritesButton({
  id,
  isBlockButton,
}: FavouritesButtonProps): ReactElement {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.products);

  const isWishlisted =
    wishlistItems.find((productID: Product['id']) => productID === id) !== undefined;

  function handleAddingToFavourites(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    if (e.currentTarget.dataset.id) {
      if (!isWishlisted) {
        dispatch(addToWishlist(e.currentTarget.dataset.id));
      } else {
        dispatch(removeFromWishlist(e.currentTarget.dataset.id));
      }
    }
  }

  return (
    <div
      className={styles.buttonContainer}
      data-id={id}
      onClick={(e) => handleAddingToFavourites(e)}
    >
      <Button
        className={isBlockButton === false ? styles.innerButtonIcon : styles.innerButtonBlock}
        aria-label='Add this product to favourites'
        type='button'
      >
        {isWishlisted ? (
          <span className={styles.buttonInnerText}>
            <span className={isBlockButton ? '' : 'visually-hidden'}>
              Remove this item from the wishlist
            </span>
            <div className={styles.wishlistIconContaner}>
              <Image src={WishlistIcon.src} width={50} height={50} />
            </div>
          </span>
        ) : (
          <span className={styles.buttonInnerText}>
            <span className={isBlockButton ? styles.textContent : 'visually-hidden'}>
              Add this item to the wishlist
            </span>
            <div className={styles.wishlistIconContaner}>
              <Image src={WishlistIconEmpty.src} width={50} height={50} />
            </div>
          </span>
        )}
      </Button>
    </div>
  );
}
