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
          <Image
            className={styles.image}
            width={200}
            height={300}
            src={image.src}
            alt=''
            layout='fixed'
          />
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.turnIconContainer}>
            <Image src={turnAroundIcon.src} width={25} height={25} alt='' />
          </div>
        </div>
        <div className={styles.cardBack}>
          <p>Back dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}
