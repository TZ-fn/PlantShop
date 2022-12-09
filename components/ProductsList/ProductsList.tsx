import { ReactElement } from 'react';
import styles from './ProductsList.module.scss';

interface ProductsListProps {
  children: JSX.IntrinsicElements['li'] | Array<JSX.IntrinsicElements['li']>;
}

export default function ProductsList({ children }: ProductsListProps): ReactElement {
  return <ul className={styles.list}>{children}</ul>;
}
