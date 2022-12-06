import { NEWS_CATEGORY } from 'src/constants/newsCategory';
import { SearchArticleResult } from 'src/api/searchArticle.api';
import { SectionRow } from 'src/components/ArticleList/articleList.style';
import { TopNewsFirstSection } from './topNews.style';
import { TopNewsProps } from './topNews.interface';
import ArticleCard from 'src/components/ArticleCard';
import React from 'react';

const TopNews = (props: TopNewsProps) => {
  const { articles } = props;
  const leftArticle = articles[0];
  const rightArticlesTop = articles.slice(1, 3);
  const rightArticlesBottom = articles.slice(3, 5);
  const bottomArticles = articles.slice(5, 9);

  return (
    <>
      <TopNewsFirstSection>
        <div className="top-news-left">
          <ArticleCard
            imagePriority
            id={leftArticle.id}
            shortDescription={leftArticle.fields.trailText}
            title={leftArticle.webTitle}
            imgUrl={leftArticle.fields.thumbnail}
            category="default"
          />
        </div>
        <div className="top-news-right">
          {rightArticlesTop.map((item, index) => (
            <div key={item.id} className="top-news-right-col">
              <ArticleCard
                imagePriority
                id={item.id}
                title={item.webTitle}
                imgUrl={item.fields.thumbnail}
                category={
                  index === 0 ? NEWS_CATEGORY.sports : NEWS_CATEGORY.culture
                }
              />
            </div>
          ))}
          {rightArticlesBottom.map((item, index) => (
            <div key={item.id} className="top-news-right-col">
              <ArticleCard
                imagePriority
                id={item.id}
                title={item.webTitle}
                hideThumbnail
                category={index === 0 ? NEWS_CATEGORY.lifeAndStyle : 'default'}
              />
            </div>
          ))}
        </div>
      </TopNewsFirstSection>
      <SectionRow>
        {bottomArticles.map((item: SearchArticleResult) => (
          <div key={item.id} className="col">
            <ArticleCard
              imagePriority
              id={item.id}
              imgUrl={item.fields.thumbnail}
              shortDescription={item.fields.trailText}
              title={item.webTitle}
              category={NEWS_CATEGORY.sports}
            />
          </div>
        ))}
      </SectionRow>
    </>
  );
};

export default TopNews;
