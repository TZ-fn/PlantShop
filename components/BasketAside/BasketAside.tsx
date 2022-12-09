import { ReactElement } from 'react';
import Link from 'next/link';
import { formatCurrency } from 'utils/formatCurrency';
import styles from './BasketAside.module.scss';

interface BasketAsideProps {
  basketTotal: 0 | { integer: number; fraction: number; currency?: string };
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
      <Link href={'/products'}>
        <button type='button' className={styles.continueButton}>
          Continue shopping
        </button>
      </Link>
    </aside>
  );
}
