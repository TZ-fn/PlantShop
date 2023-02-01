import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './ProductMiniature.module.scss';

interface ProductMiniatureProps {
  source: string;
}

export default function ProductMiniature({ source }: ProductMiniatureProps): ReactElement {
  return (
    <div className={styles.miniatureContainer}>
      <Image src={source} height={96} width={80} alt='Miniature image of the plant' />
    </div>
  );
}
