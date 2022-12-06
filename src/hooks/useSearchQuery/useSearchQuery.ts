import {
  SearchArticleResponse,
  SearchArticleResult,
  searchArticleApi,
} from 'src/api/searchArticle.api';

import { OrderType } from 'src/api/common.interface';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export const INITIAL_PAGE = 1;
export const INITIAL_PAGE_SIZE = 15;

export interface LoadData {
  hasMore: boolean;
  page: number;
}

export const initialLoadData = {
  hasMore: true,
  page: INITIAL_PAGE,
};

const useSearchQuery = (
  orderBy: OrderType,
  query: string | undefined,
  section: string,
  pageSize = INITIAL_PAGE_SIZE
) => {
  const [articles, setArticles] = useState<SearchArticleResult[]>([]);
  const [loadData, setLoadData] = useState<LoadData>(() => initialLoadData);

  const resetLoadData = () => setLoadData(initialLoadData);
  const onSuccess = (data: SearchArticleResponse) => {
    if (data.currentPage === 1) {
      setArticles(data.results);
      resetLoadData();
    } else
      setArticles((prev) => Array.from(new Set([...prev, ...data.results])));
  };

  const {
    isLoading,
    mutate: fetchArticles,
    data: response,
    reset: resetRequest,
    isSuccess,
  } = useMutation(searchArticleApi, {
    onSuccess,
  });

  const resetArticleSearch = () => setArticles([]);

  const loadMore = () => {
    if (loadData.page === response?.pages) return;
    fetchArticles({
      orderBy: orderBy,
      page: loadData.page + 1,
      pageSize: pageSize,
      q: query,
      section: section,
    });

    if (response)
      setLoadData((prev) => ({
        ...prev,
        hasMore: !(prev.page + 1 >= response.pages),
        page: prev.page + 1,
      }));
  };

  return {
    isLoading,
    fetchArticles,
    articles,
    resetArticleSearch,
    loadMore,
    loadData,
    resetLoadData,
    resetRequest,
    isSuccess,
  };
};

export default useSearchQuery;
