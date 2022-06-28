import { ReactElement, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from 'store/store';
import { addToWishlist, removeFromWishlist } from 'features/wishlist/wishlistSlice';
import WishlistIcon from 'public/icons/wishlistIcon.svg';
import WishlistIconEmpty from 'public/icons/wishlistIconEmpty.svg';
import Button from '../Button/Button';
import styles from './FavouritesButton.module.scss';
import { Product } from 'types/types';

interface FavouritesButtonProps {
  id: string;
}

export default function FavouritesButton({ id }: FavouritesButtonProps): ReactElement {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.products);

  const isWishlisted =
    wishlistItems.find((productID: Product['id']) => productID === id) !== undefined;

  function handleAddingToFavourites(e: MouseEvent<HTMLButtonElement>) {
    console.log(e.currentTarget);
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
        className={styles.innerButton}
        aria-label='Add this product to favourites'
        type='button'
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
