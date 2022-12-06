import { createContext, useContext } from 'react';

import { ArticleSearchCtx } from './articleSearch.interface';
import { INITIAL_PAGE } from 'src/hooks/useSearchQuery/useSearchQuery';
import { ORDER_TYPE } from 'src/constants/orderType';

const ArticleSearchContext = createContext<ArticleSearchCtx>({
  articles: [],
  orderBy: ORDER_TYPE.newest,
  sortBy: () => null,
  onSearch: () => null,
  isLoading: true,
  loadMore: () => null,
  loadData: {
    hasMore: true,
    page: INITIAL_PAGE,
  },
  resetAll: () => null,
  queryText: '',
});

const { Provider } = ArticleSearchContext;
const useArticleSearchContext = (): ArticleSearchCtx =>
  useContext(ArticleSearchContext);

export { Provider as ArticleSearchProvider, useArticleSearchContext };
