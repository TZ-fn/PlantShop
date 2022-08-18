import { ReactElement } from 'react';
import styles from './RatingSystem.module.scss';

interface RatingSystemProps {
  id: string;
  rating: number;
  orientation: 'Horizontal' | 'Vertical';
}

export default function RatingSystem({ id, rating, orientation }: RatingSystemProps): ReactElement {
  return (
    <div className={styles[`ratingContainer${orientation}`]}>
      <div
        className={styles.rating}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input type='checkbox' id={`star5-${id}`} name='rating' />
        <label htmlFor={`star5-${id}`}></label>
        <input type='checkbox' id={`star4-${id}`} name='rating' />
        <label htmlFor={`star4-${id}`}></label>
        <input type='checkbox' id={`star3-${id}`} name='rating' />
        <label htmlFor={`star3-${id}`}></label>
        <input type='checkbox' id={`star2-${id}`} name='rating' />
        <label htmlFor={`star2-${id}`}></label>
        <input type='checkbox' id={`star1-${id}`} name='rating' />
        <label htmlFor={`star1-${id}`}></label>
      </div>
    </div>
  );
}
