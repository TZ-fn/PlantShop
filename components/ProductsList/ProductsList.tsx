import { ReactElement, ReactNode } from 'react';
import styles from './ProductsList.module.scss';

interface ProductsListProps {
  children: ReactNode;
}

export default function ProductsList({ children }: ProductsListProps): ReactElement {
  return <ul className={styles.list}>{children}</ul>;
}
