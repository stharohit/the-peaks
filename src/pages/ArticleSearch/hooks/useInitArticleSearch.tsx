import { useArticleSearchContext } from 'src/context/ArticleSearch/ArticleSearch.context';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver/useIntersectionObserver';

const useInitArticleSearch = () => {
  const { query } = useRouter();
  const searchQuery = query.query;

  const {
    isLoading,
    articles,
    sortBy,
    loadMore,
    loadData,
    onSearch,
    resetAll,
  } = useArticleSearchContext();

  const showList = searchQuery && searchQuery.length > 0 && articles.length > 0;

  const intersectionRef = useIntersectionObserver({
    holdObserver: isLoading,
    isObserving: loadData.hasMore,
    onIntersection: loadMore,
  });

  useEffect(() => {
    if (searchQuery) {
      onSearch(searchQuery as string);
    }
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      resetAll();
    };
  }, []);

  return {
    intersectionRef,
    showList,
    sortBy,
    isLoading,
    articles,
  };
};

export default useInitArticleSearch;
