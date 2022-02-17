import { ReactElement } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  name: string;
  image: string;
  description?: string;
}

export default function Card({ name, image, description }: CardProps): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <p className={styles.name}>{name}</p>
      <img className={styles.image} src={image} alt='' />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}
