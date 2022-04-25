import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import turnAroundIcon from '../../../public/icons/turnAroundArrowIcon.svg';
import addToBasketIcon from '../../../public/icons/addToBasketIcon.svg';

interface CardProps {
  name: string;
  image: string;
  description?: string;
}

export default function Card({ name, image, description }: CardProps): ReactElement {
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
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.buttonContainer}>
            <button type='button' className={styles.addToBasketButton}>
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
