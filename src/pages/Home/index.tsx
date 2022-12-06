import React from 'react';

import { OrderType } from 'src/api/common.interface';
import ArticleSortingHeader from 'src/components/ArticleSortingHeader';
import Layout from 'src/layout/index';
import Loader from 'src/components/Loader';
import TopNews from './TopNews';
import dynamic from 'next/dynamic';
import useGetTopStories from './hooks/useGetTopStories/useGetTopStories';

const CategorySection = dynamic(() => import('./CategorySection'));

const HomePage = () => {
  const { isLoading, data, onSort } = useGetTopStories();
  const { culture, lifeAndStyle, news, sports } = data;

  return (
    <Layout>
      <ArticleSortingHeader
        title="Top stories"
        onSort={(e) => onSort(e.currentTarget.value as OrderType)}
      />
      {news && <TopNews articles={news.results} />}
      {sports && <CategorySection title="Sport" articles={sports.results} />}
      {culture && (
        <CategorySection title="Culture" articles={culture.results} />
      )}
      {lifeAndStyle && (
        <CategorySection
          title="Life and Style"
          articles={lifeAndStyle.results}
        />
      )}
      {isLoading && <Loader />}
    </Layout>
  );
};

export default HomePage;
