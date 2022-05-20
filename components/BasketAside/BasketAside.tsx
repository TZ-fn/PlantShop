import { ReactElement } from 'react';
import styles from './BasketAside.module.scss';
import { formatCurrency } from 'utils/formatNumber';

export default function BasketAside(): ReactElement {
  return (
    <aside className={styles.asideContainer}>
      <p className={styles.totalContainer}>
        <span className={styles.basketTotal}>Basket total:</span> {formatCurrency(1231.12)}
      </p>
      <button type='button' className={styles.checkoutButton}>
        Checkout and pay
      </button>
      <button type='button' className={styles.continueButton}>
        Continue shopping
      </button>
    </aside>
  );
}
