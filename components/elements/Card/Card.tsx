import { ReactElement, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { addToBasket } from 'features/basket/basketSlice';
import styles from './Card.module.scss';
import turnAroundIcon from 'public/icons/turnAroundArrowIcon.svg';
import addToBasketIcon from 'public/icons/addToBasketIcon.svg';
import { formatCurrency } from 'utils/formatCurrency';
import { Plant } from 'types/types';
import FavouritesButton from '../FavouritesButton/FavouritesButton';

export default function Card({ id, name, image, description, price }: Plant): ReactElement {
  const dispatch = useDispatch();

  function addToBasketHandler(e: MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.dataset.id) {
      dispatch(addToBasket(e.currentTarget.dataset.id));
    }
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <div className={styles.cardFront}>
          <p className={styles.name}>{name}</p>
          <Image className={styles.image} src={image} alt='' layout='fill' />
          <div className={styles.turnIconContainer}>
            <Image src={turnAroundIcon.src} width={35} height={35} alt='' />
          </div>
        </div>
        <div className={styles.cardBack}>
          <FavouritesButton id={id} />
          <p className={styles.description}>{description}</p>
          <p className={styles.priceContainer}>Price: {formatCurrency(price)}</p>
          <div className={styles.buttonContainer}>
            <button
              onClick={(e) => addToBasketHandler(e)}
              type='button'
              className={styles.addToBasketButton}
              data-id={id}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={addToBasketIcon.src}
                  width={'50px'}
                  height={'50px'}
                  alt=''
                  layout='fixed'
                />
              </div>
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
