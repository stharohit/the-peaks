import { SearchArticleResponse } from 'src/api/searchArticle.api';

export interface TopStoriesResponse {
  news?: SearchArticleResponse;
  sports?: SearchArticleResponse;
  culture?: SearchArticleResponse;
  lifeAndStyle?: SearchArticleResponse;
}
