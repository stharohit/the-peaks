import { ArticleListProps } from './articleList.interface';
import { SearchArticleResult } from 'src/api/searchArticle.api';
import { SectionRow } from './articleList.style';
import ArticleCard from '../ArticleCard';
import React from 'react';

const ArticleList = (props: ArticleListProps) => {
  const { articles, hasShortDescription, intersectionRef, imagePriority } =
    props;
  const getShortDescription = (data: SearchArticleResult) =>
    hasShortDescription ? data.fields.trailText : '';

  return (
    <SectionRow>
      {articles.map((item: SearchArticleResult, index) => (
        <div
          data-testid="article-list"
          key={item.id}
          className="col"
          ref={index === articles.length - 1 ? intersectionRef : null}
        >
          <ArticleCard
            id={item.id}
            imgUrl={item.fields.thumbnail}
            shortDescription={getShortDescription(item)}
            title={item.webTitle}
            category={item.sectionId}
            imagePriority={imagePriority}
          />
        </div>
      ))}
    </SectionRow>
  );
};

export default ArticleList;
