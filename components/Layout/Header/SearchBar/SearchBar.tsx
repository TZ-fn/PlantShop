import { ReactElement } from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar(): ReactElement {
  return (
    <div className={styles.searchContainer}>
      <input type='text' />
      <button type='button'>Search</button>
    </div>
  );
}
