import { ChangeEvent, MouseEvent, KeyboardEvent, ReactElement, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RootState } from 'store/store';
import { PlantsData } from 'types/types';
import styles from './SearchBar.module.scss';

export default function SearchBar(): ReactElement {
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<null | number>(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [wasArrowDownPressedAlready, setWasArrowDownPressedAlready] = useState(false);
  const savedSearchValue = useRef(searchValue);
  const router = useRouter();

  function searchPlans(plants: PlantsData, query: string) {
    return plants
      .filter((plant) => plant.name.toLocaleLowerCase().includes(query))
      .map((plant) => plant.name);
  }

  function handleSearchBar(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    savedSearchValue.current = e.target.value;
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
    router.push(`/product/${searchValue.toLocaleLowerCase()}`);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!searchValue.trim()) {
        return;
      }
      if (wasArrowDownPressedAlready && activeSuggestionIndex === filteredSuggestions.length - 1) {
        return;
      }
      if (!wasArrowDownPressedAlready) {
        setSearchValue(filteredSuggestions[0]);
        setActiveSuggestionIndex(0);
        setWasArrowDownPressedAlready(true);
      } else if (activeSuggestionIndex !== null) {
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
      if (activeSuggestionIndex !== null) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
        setSearchValue(filteredSuggestions[activeSuggestionIndex - 1]);
      }
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
      router.push(`/product/${searchValue}`);
    }
  };

  const handleSuggestionHover = (e: MouseEvent<HTMLAnchorElement>) => {
    setActiveSuggestionIndex(
      filteredSuggestions.indexOf((e.target as HTMLAnchorElement).innerHTML),
    );
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
        onBlur={() => setTimeout(() => setShowSuggestions(false), 500)}
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
                  <li className={styles.autoSuggestionItemError} key='inputValueTooShort'>
                    Please enter at least 2 letters...
                  </li>
                );
              case filteredSuggestions.length === 0:
                return (
                  <li className={styles.autoSuggestionItemError} key='NoResults'>
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
                      onClick={resetTheSearch}
                      key={plant}
                    >
                      <Link href={`/product/${plant.toLocaleLowerCase()}`}>
                        <a className={styles.innerLink} href='' onMouseOver={handleSuggestionHover}>
                          {plant}
                        </a>
                      </Link>
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
