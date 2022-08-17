import { ReactElement } from 'react';
import styles from './RatingSystem.module.scss';

interface RatingSystemProps {
  rating: number;
  orientation: 'Horizontal' | 'Vertical';
}

export default function RatingSystem({ rating, orientation }: RatingSystemProps): ReactElement {
  return (
    <div className={styles[`ratingContainer${orientation}`]}>
      <div
        className={styles.rating}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input type='checkbox' id='star1' name='rating' />
        <label htmlFor='star1'></label>
        <input type='checkbox' id='star2' name='rating' />
        <label htmlFor='star2'></label>
        <input type='checkbox' id='star3' name='rating' />
        <label htmlFor='star3'></label>
        <input type='checkbox' id='star4' name='rating' />
        <label htmlFor='star4'></label>
        <input type='checkbox' id='star5' name='rating' />
        <label htmlFor='star5'></label>
      </div>
    </div>
  );
}
