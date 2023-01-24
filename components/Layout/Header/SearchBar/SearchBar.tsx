import { ChangeEvent, MouseEvent, KeyboardEvent, ReactElement, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from 'store/store';
import { PlantsData } from 'types/types';
import styles from './SearchBar.module.scss';

export default function SearchBar(): ReactElement {
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [wasArrowDownPressedAlready, setWasArrowDownPressedAlready] = useState(false);
  const savedSearchValue = useRef(searchValue);

  function searchPlans(plants: PlantsData, query: string) {
    return plants
      .filter((plant) => plant.name.toLocaleLowerCase().includes(query))
      .map((plant) => plant.name);
  }

  function handleSearchBar(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    setFilteredSuggestions(searchPlans(plants, e.target.value));
  }

  const resetTheSearch = () => {
    setSearchValue('');
  };

  const handleSearchButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      return;
    }
    setActiveSuggestionIndex(0);
    savedSearchValue.current = '';
    setSearchValue('');
    setShowSuggestions(false);
    setWasArrowDownPressedAlready(false);
    // router.push(`/product/${searchValue}`);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      if (!searchValue.trim()) {
        return;
      }
      e.preventDefault();
      if (wasArrowDownPressedAlready && activeSuggestionIndex === filteredSuggestions.length - 1) {
        return;
      }
      if (!wasArrowDownPressedAlready) {
        setSearchValue(filteredSuggestions[0]);
        setWasArrowDownPressedAlready(true);
      } else {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
        setSearchValue(filteredSuggestions[activeSuggestionIndex + 1]);
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeSuggestionIndex === 0) {
        setSearchValue(savedSearchValue.current);
        setWasArrowDownPressedAlready(false);
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
      setSearchValue(filteredSuggestions[activeSuggestionIndex - 1]);
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (!searchValue.trim()) {
        return;
      }
      setActiveSuggestionIndex(0);
      savedSearchValue.current = '';
      setSearchValue('');
      setShowSuggestions(false);
      setWasArrowDownPressedAlready(false);
      // router.push(`/product/${searchValue}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        placeholder='Search for products...'
        className={styles.searchInput}
        type='text'
        onChange={handleSearchBar}
        value={searchValue}
        onKeyDown={(e) => handleKeyPress(e)}
        // onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
        onFocus={() => setShowSuggestions(true)}
        autoComplete='off'
      />
      <button className={styles.searchButton} type='button' onClick={handleSearchButton}>
        Search
      </button>
      {searchValue?.length > 0 && showSuggestions === true ? (
        <ul className={styles.autoSuggestionsContainer}>
          {(() => {
            switch (true) {
              case searchValue.length === 1:
                return (
                  <li className={styles.autoSuggestionItemActive} key='inputValueTooShort'>
                    Please enter at least 2 letters...
                  </li>
                );
              case filteredSuggestions.length === 0:
                return (
                  <li className={styles.autoSuggestionItemActive} key='NoResults'>
                    No results found...
                  </li>
                );
              default:
                return filteredSuggestions.map((plant: string, index) => {
                  let isActive = false;
                  if (index === activeSuggestionIndex) {
                    isActive = true;
                  }
                  return (
                    <li
                      className={
                        isActive ? styles.autoSuggestionItemActive : styles.autoSuggestionItem
                      }
                      onClick={() => resetTheSearch()}
                      key={plant}
                    >
                      <Link href={`/product/${plant.toLocaleLowerCase()}`}>{plant}</Link>
                    </li>
                  );
                });
            }
          })()}
        </ul>
      ) : null}
    </div>
  );
}
