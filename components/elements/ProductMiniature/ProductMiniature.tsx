import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './ProductMiniature.module.scss';

interface BasketBadgeProps {
  source: string;
}

export default function ProductMiniature({ source }: BasketBadgeProps): ReactElement {
  return (
    <div className={styles.miniatureContainer}>
      <Image src={source} height={96} width={80} />
    </div>
  );
}
