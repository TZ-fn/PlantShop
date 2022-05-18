import { ReactElement } from 'react';
import styles from './ProductsList.module.scss';

export default function ProductsList({ children }): ReactElement {
  return <ul className={styles.list}>{children}</ul>;
}
