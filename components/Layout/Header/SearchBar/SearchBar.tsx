import { ReactElement } from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar(): ReactElement {
  return (
    <div className={styles.searchContainer}>
      <input placeholder='Search for products...' className={styles.searchInput} type='text' />
      <button className={styles.searchButton} type='button'>
        Search
      </button>
    </div>
  );
}
