import { useArticleSearchContext } from 'src/context/ArticleSearch/ArticleSearch.context';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import useDebounce from 'src/hooks/useDebounce/useDebounce';

const useSearchBarAction = () => {
  const router = useRouter();
  const { query: searchQuery } = router.query;
  const { onSearch } = useArticleSearchContext();
  const [searchValue, setSearchValue] = useState<string | undefined>(
    () => searchQuery as string
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const debouncedSearchValue = useDebounce(searchValue ?? '', 300);

  const onChange = (val: string) => {
    setSearchValue(val);
  };

  useEffect(() => {
    if (searchValue !== undefined) {
      router.push({
        pathname: '/search',
        query: { query: debouncedSearchValue },
      });
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (inputRef.current && searchQuery) {
      inputRef.current.focus();
    }
  }, []);

  return { onChange, inputRef, onSearch, searchValue, searchQuery };
};

export default useSearchBarAction;
