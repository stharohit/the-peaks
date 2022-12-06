import React from 'react';

import { IconSearch } from 'src/components/Icons';
import { SearchInputWrap } from './searchBar.style';
import useSearchBarAction from './hooks/useSearchBarAction';

const SearchBar = () => {
  const { onChange, inputRef, onSearch, searchValue, searchQuery } =
    useSearchBarAction();

  return (
    <SearchInputWrap>
      <input
        key="header-search-input"
        type="text"
        aria-label="search input"
        ref={inputRef}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={searchQuery ? 'focus' : ''}
        value={searchValue || ''}
      />
      <button
        className="search-btn"
        onClick={() =>
          inputRef.current ? onSearch(inputRef.current?.value) : null
        }
        onFocus={() => inputRef.current?.focus()}
        onBlur={() => inputRef.current?.blur()}
        aria-label="search button"
      >
        <IconSearch />
      </button>
    </SearchInputWrap>
  );
};

export default SearchBar;
