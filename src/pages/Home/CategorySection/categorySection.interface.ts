import { SearchArticleResponse } from 'src/api/searchArticle.api';

export interface CategorySectionProps {
  articles: SearchArticleResponse['results'];
  title?: string;
  hasShortDescription?: boolean;
}
