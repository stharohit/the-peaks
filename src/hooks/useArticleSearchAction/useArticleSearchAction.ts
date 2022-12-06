import useSearchQuery, {
  INITIAL_PAGE,
  INITIAL_PAGE_SIZE,
} from '../useSearchQuery/useSearchQuery';

import { ArticleSearchCtx } from 'src/context/ArticleSearch/articleSearch.interface';
import { ORDER_TYPE } from 'src/constants/orderType';
import { OrderType } from 'src/api/common.interface';
import { useState } from 'react';

const useArticleSearchAction = (): ArticleSearchCtx => {
  const [orderBy, setOrderBy] = useState<OrderType>(() => ORDER_TYPE.newest);
  const [queryText, setQueryText] = useState<string>('');

  const {
    fetchArticles,
    articles,
    isLoading,
    resetArticleSearch,
    loadMore,
    loadData,
    resetLoadData,
    resetRequest,
  } = useSearchQuery(orderBy, queryText, 'news');

  const sortBy = (orderBy: OrderType) => {
    setOrderBy(orderBy);
    resetArticleSearch();
    fetchArticles({
      orderBy: orderBy,
      pageSize: INITIAL_PAGE_SIZE,
      section: 'news',
      q: queryText,
      page: INITIAL_PAGE,
    });
  };

  const onSearch = async (_val: string) => {
    resetArticleSearch();
    setQueryText(_val);
    if (_val) {
      fetchArticles({
        orderBy: orderBy,
        pageSize: INITIAL_PAGE_SIZE,
        section: 'news',
        q: _val,
        page: INITIAL_PAGE,
      });
    }
  };

  const resetAll = () => {
    resetArticleSearch();
    setOrderBy(ORDER_TYPE.newest);
    resetLoadData();
    resetRequest();
    setQueryText('');
  };

  return {
    articles,
    orderBy,
    sortBy,
    onSearch,
    isLoading,
    loadMore,
    loadData,
    resetAll,
    queryText,
  };
};

export default useArticleSearchAction;
