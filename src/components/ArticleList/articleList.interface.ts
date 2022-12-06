import { SearchArticleResponse } from 'src/api/searchArticle.api';

export interface ArticleListProps {
  articles: SearchArticleResponse['results'];
  hasShortDescription?: boolean;
  intersectionRef?: (node: unknown) => void;
  imagePriority?: boolean;
}
