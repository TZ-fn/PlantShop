import { ReactElement } from 'react';
import styles from './ProductsList.module.scss';
import Product from './Product/Product';

export default function ProductsList(): ReactElement {
  return (
    <ul className={styles.list}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ul>
  );
}
