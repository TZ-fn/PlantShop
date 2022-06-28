import { ReactElement } from 'react';
import styles from './ProductCountBadge.module.scss';

interface ProductCountBadgeProps {
  quantity: number;
  type: string;
}

export default function ProductCountBadge({
  quantity,
  type,
}: ProductCountBadgeProps): ReactElement {
  return (
    <div className={`${styles.badgeContainer} ${styles[type]}`}>
      {quantity <= 99 ? quantity : '99+'}
    </div>
  );
}
