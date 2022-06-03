import { ReactElement } from 'react';
import styles from './BasketBadge.module.scss';

interface BasketBadgeProps {
  quantity: number;
}

export default function BasketBadge({ quantity }: BasketBadgeProps): ReactElement {
  return <div className={styles.badgeContainer}>{quantity <= 99 ? quantity : '99+'}</div>;
}
