import { LoadData } from 'src/hooks/useSearchQuery/useSearchQuery';
import { OrderType } from 'src/api/common.interface';
import { SearchArticleResult } from 'src/api/searchArticle.api';

export interface ArticleSearchCtx {
  articles: SearchArticleResult[];
  orderBy: OrderType;
  sortBy: (orderBy: OrderType) => void;
  onSearch: (_val: string) => void;
  isLoading: boolean;
  loadMore: () => void;
  loadData: LoadData;
  resetAll: () => void;
  queryText: string;
}
