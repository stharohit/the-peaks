import { singleArticleApi } from 'src/api/singleArticle.api';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

const useSingleItemFetch = (articleid: string | undefined) => {
  const {
    data,
    mutate: fetchSingleApi,
    isLoading,
  } = useMutation(singleArticleApi);
  const content = data?.content;

  useEffect(() => {
    if (articleid) {
      fetchSingleApi({ path: articleid as string });
    }
  }, [articleid]);

  return { isLoading, content };
};

export default useSingleItemFetch;
