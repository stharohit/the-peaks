import { NEWS_CATEGORY } from 'src/constants/newsCategory';
import { SearchArticleResult } from 'src/api/searchArticle.api';
import { render, screen } from '@testing-library/react';
import ArticleList from '.';
import MockProvider from 'src/helpers/test/MockProvider';

const articles: SearchArticleResult[] = [
  {
    fields: {
      thumbnail: '',
      trailText: '',
    },
    id: '1',
    isHosted: true,
    pillarId: '',
    pillarName: '',
    sectionId: '',
    sectionName: '',
    type: NEWS_CATEGORY.sports,
    webPublicationDate: '',
    webTitle: '',
  },
  {
    fields: {
      thumbnail: '',
      trailText: '',
    },
    id: '2',
    isHosted: true,
    pillarId: '',
    pillarName: '',
    sectionId: '',
    sectionName: '',
    type: NEWS_CATEGORY.sports,
    webPublicationDate: '',
    webTitle: '',
  },
];

describe('Test article list', () => {
  it('should have article card', () => {
    render(
      <MockProvider>
        <ArticleList articles={articles} />
      </MockProvider>
    );

    const articleCol = screen.getAllByTestId('article-list');
    expect(articleCol.length).toEqual(2);
  });
});
