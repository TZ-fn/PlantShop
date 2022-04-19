import { ReactElement } from 'react';
import styles from './Product.module.scss';

export default function Product(): ReactElement {
  return (
    <li className={styles.productContainer}>
      <p className={styles.productName}>Lorem ipsum dolor sit amet</p>
      <div className={styles.counter}>
        <button type='button' className={styles.countMinus}>
          -
        </button>
        <input type='text' className={styles.count} />
        <button type='button' className={styles.countPlus}>
          +
        </button>
      </div>
      <p className={styles.price}>123123</p>
      <button type='button' className={styles.removeButton}>
        remove
      </button>
    </li>
  );
}
