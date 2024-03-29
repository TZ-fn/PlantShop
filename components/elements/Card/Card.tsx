import { ReactElement, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { addToBasket } from 'features/basket/basketSlice';
import formatCurrency from 'utils/formatCurrency';
import WishlistButton from '../WishlistButton/WishlistButton';
import RatingSystem from '../RatingSystem/RatingSystem';
import { Plant } from 'types/types';
import styles from './Card.module.scss';

export default function Card({
  id,
  name,
  image,
  description,
  price,
  rating = 0,
}: Plant): ReactElement {
  const dispatch = useDispatch();

  function addToBasketHandler(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (e.currentTarget.dataset.id) {
      dispatch(addToBasket(e.currentTarget.dataset.id));
    }
  }

  return (
    <div className={styles.cardWrapper}>
      <Link href={`product/${name.toLocaleLowerCase()}`} passHref>
        <div className={styles.cardContent}>
          <div className={styles.cardFront}>
            <p className={styles.name}>{name}</p>
            <Image className={styles.image} src={image} alt='' layout='fill' />
            <div className={styles.turnIconContainer}>
              <Image src='/icons/turnAroundArrowIcon.svg' width={35} height={35} alt='' />
            </div>
          </div>
          <div className={styles.cardBack}>
            <RatingSystem id={id} orientation='Horizontal' rating={rating} />
            <WishlistButton id={id} isBlockButton={false} />
            <h3 className={styles.descriptionHeader}>About this plant:</h3>
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
                    src='/icons/addToBasketIcon.svg'
                    width={50}
                    height={50}
                    alt=''
                    layout='responsive'
                  />
                </div>
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
