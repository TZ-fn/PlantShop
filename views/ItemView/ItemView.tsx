import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { addToBasket } from 'features/basket/basketSlice';
import { Plant } from 'types/types';
import formatCurrency from 'utils/formatCurrency';
import addToBasketIcon from 'public/icons/addToBasketIcon.svg';
import WishlistButton from 'components/elements/WishlistButton/WishlistButton';
import ItemGallery from 'components/ItemGallery/ItemGallery';
import RatingSystem from 'components/elements/RatingSystem/RatingSystem';
import styles from './ItemView.module.scss';

export default function ItemView({ id, name, image, description, price, rating }: Plant) {
  const dispatch = useDispatch();

  function addToBasketHandler(e: MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.dataset.id) {
      dispatch(addToBasket(e.currentTarget.dataset.id));
    }
  }

  return (
    <div className={styles.itemContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.sectionHeader}>{name}</h2>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              width={300}
              height={400}
              src={image}
              alt=''
              layout='responsive'
            />
            <RatingSystem id={id} orientation='Vertical' rating={rating!} />
          </div>
          <p>{description}</p>
        </div>
        <div className={styles.galleryContainer}>
          <ItemGallery name={name} />
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          onClick={(e) => addToBasketHandler(e)}
          type='button'
          className={styles.addToBasketButton}
          data-id={id}
        >
          <div className={styles.buttonImageContainer}>
            <Image src={addToBasketIcon.src} width={50} height={50} alt='' layout='responsive' />
          </div>
          Add to basket: {formatCurrency(price)}
        </button>
        <div className={styles.wishlistButtonContainer}>
          <WishlistButton isBlockButton={true} id={id} />
        </div>
      </div>
    </div>
  );
}
