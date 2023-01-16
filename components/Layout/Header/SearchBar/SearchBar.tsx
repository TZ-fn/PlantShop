import { ChangeEvent, MouseEvent, ReactElement, useState } from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar(): ReactElement {
  const [searchValue, setSearchValue] = useState('');

  function handleSearchBar(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleSearchButton(e: MouseEvent<HTMLButtonElement>) {
    return;
  }

  return (
    <div className={styles.searchContainer}>
      <input
        placeholder='Search for products...'
        className={styles.searchInput}
        type='text'
        onChange={handleSearchBar}
        value={searchValue}
      />
      <button className={styles.searchButton} type='button' onClick={handleSearchButton}>
        Search
      </button>
    </div>
  );
}
