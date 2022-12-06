import { useEffect, useState } from 'react';

import { NEWS_CATEGORY } from 'src/constants/newsCategory';
import { ORDER_TYPE } from 'src/constants/orderType';
import { OrderType } from 'src/api/common.interface';
import { TopStoriesResponse } from './interface';
import { searchArticleApi } from 'src/api/searchArticle.api';
import { useQuery } from '@tanstack/react-query';

const useGetTopStories = () => {
  const [orderBy, setOrderBy] = useState<OrderType>(() => ORDER_TYPE.newest);
  const [data, setData] = useState<TopStoriesResponse>({});

  const { data: news, isLoading: newsLoading } = useQuery(
    ['news', orderBy],
    () =>
      searchArticleApi({
        orderBy,
        pageSize: 8,
        section: 'news',
      }),
    {
      useErrorBoundary: true,
    }
  );
  const { data: sports, isLoading: sportsLoading } = useQuery(
    ['sports', orderBy],
    () =>
      searchArticleApi({
        orderBy,
        pageSize: 3,
        section: NEWS_CATEGORY.sports,
      })
  );
  const { data: culture, isLoading: cultureLoading } = useQuery(
    ['culture', orderBy],
    () =>
      searchArticleApi({
        orderBy,
        pageSize: 3,
        section: NEWS_CATEGORY.culture,
      })
  );
  const { data: lifeAndStyle, isLoading: lifeAndStyleLoading } = useQuery(
    ['lifeAndStyle', orderBy],
    () =>
      searchArticleApi({
        orderBy,
        pageSize: 3,
        section: NEWS_CATEGORY.lifeAndStyle,
      })
  );

  const isLoading =
    newsLoading || cultureLoading || sportsLoading || lifeAndStyleLoading;

  const onSort = (orderBy: OrderType) => {
    setOrderBy(orderBy);
  };

  useEffect(() => {
    setData({ news, sports, culture, lifeAndStyle });
  }, [news, sports, culture, lifeAndStyle]);

  return { data, isLoading, onSort };
};

export default useGetTopStories;
