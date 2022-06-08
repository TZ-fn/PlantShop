import { ReactElement } from 'react';
import styles from './BasketAside.module.scss';
import { formatCurrency } from 'utils/formatCurrency';

interface BasketAsideProps {
  basketTotal: { integer: number; fraction: number; currency?: string };
}

export default function BasketAside({ basketTotal }: BasketAsideProps): ReactElement {
  return (
    <aside className={styles.asideContainer}>
      <p className={styles.totalContainer}>
        <span className={styles.basketTotal}>Basket total:</span> {formatCurrency(basketTotal)}
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
