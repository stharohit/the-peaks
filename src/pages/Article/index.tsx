/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { useRouter } from 'next/router';
import ArticleContent from './ArticleContent';
import BookmarkActionButton from './BookmarkActionButton';
import Layout from 'src/layout';
import Loader from 'src/components/Loader';
import useSingleItemFetch from './hooks/useSingleItemFetch';

const ArticlePage = () => {
  const { query } = useRouter();
  const { articleid } = query;
  const { content, isLoading } = useSingleItemFetch(articleid as string);

  return (
    <Layout title={content?.webTitle || ''}>
      {!isLoading && content ? (
        <>
          <BookmarkActionButton content={content} />
          <ArticleContent
            publishedDate={content.webPublicationDate}
            body={content.fields.body}
            headline={content.fields.trailText}
            title={content.webTitle}
            imgUrl={content.fields.main}
          />
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default ArticlePage;
