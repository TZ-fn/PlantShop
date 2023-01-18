import { ChangeEvent, MouseEvent, ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { PlantsData } from 'types/types';
import styles from './SearchBar.module.scss';

export default function SearchBar(): ReactElement {
  const [searchValue, setSearchValue] = useState<string>('');
  const plants = useSelector((state: RootState) => state.plants.plantsData);

  function searchPlans(plants: PlantsData, query: string) {
    return plants
      .filter((plant) => plant.name.toLocaleLowerCase().includes(query))
      .map((plant) => plant.name);
  }

  function handleSearchBar(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    console.log(searchPlans(plants, e.target.value));
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
