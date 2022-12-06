import React from 'react';

import { OrderType } from 'src/api/common.interface';
import ArticleList from 'src/components/ArticleList';
import ArticleSortingHeader from 'src/components/ArticleSortingHeader';
import EmptyResultText from 'src/components/EmptyResultText';
import Layout from 'src/layout';
import Loader from 'src/components/Loader';
import useInitArticleSearch from './hooks/useInitArticleSearch';

const ArticleSearch = () => {
  const { intersectionRef, showList, sortBy, isLoading, articles } =
    useInitArticleSearch();

  return (
    <Layout title="Search Page">
      <ArticleSortingHeader
        title="Search Results"
        onSort={(e) => sortBy(e.currentTarget.value as OrderType)}
      />
      {showList && (
        <ArticleList articles={articles} intersectionRef={intersectionRef} />
      )}
      {isLoading && <Loader />}
      {!isLoading && !showList && (
        <EmptyResultText text="No search result found." />
      )}
    </Layout>
  );
};

export default ArticleSearch;
