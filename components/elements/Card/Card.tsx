import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import turnAroundIcon from '../../../public/icons/turnAroundArrowIcon.svg';

interface CardProps {
  name: string;
  image: StaticImageData;
  description?: string;
}

export default function Card({ name, image, description }: CardProps): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardFront}>
          <p className={styles.name}>{name}</p>
          <Image className={styles.image} src={image.src} alt='' layout='fill' />
          <div className={styles.turnIconContainer}>
            <Image src={turnAroundIcon.src} width={35} height={35} alt='' />
          </div>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
