import { ReactElement } from 'react';
import styles from './BasketAside.module.scss';

export default function BasketAside(): ReactElement {
  return (
    <aside className={styles.asideContainer}>
      <p className={styles.totalContainer}>Total: 123123$</p>
      <button type='button' className={styles.checkoutButton}>
        Checkout and pay
      </button>
      <button type='button' className={styles.continueButton}>
        Continue shopping
      </button>
    </aside>
  );
}
