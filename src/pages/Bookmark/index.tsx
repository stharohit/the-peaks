import { OrderType } from 'src/api/common.interface';
import { SectionRow } from 'src/components/ArticleList/articleList.style';
import { useBookmarkContext } from 'src/context/Bookmark/Bookmark.context';
import ArticleCard from 'src/components/ArticleCard';
import ArticleSortingHeader from 'src/components/ArticleSortingHeader';
import EmptyResultText from 'src/components/EmptyResultText';
import Layout from 'src/layout/index';
import React from 'react';

const BookmarkPage = () => {
  const { bookmarks, sortByPublishedDate } = useBookmarkContext();

  const showBookmarks = bookmarks.length > 0;

  const onSort = (e: React.ChangeEvent<HTMLSelectElement>) =>
    sortByPublishedDate(e.target.value as OrderType);

  return (
    <Layout title="Bookmark">
      <ArticleSortingHeader
        hideBookmarkBtn
        title="All bookmark"
        onSort={onSort}
      />
      {showBookmarks && (
        <SectionRow>
          {bookmarks.map((item) => (
            <div key={item.id} className="col">
              <ArticleCard
                id={item.id}
                imgUrl={item.fields.thumbnail}
                shortDescription={item.fields.trailText}
                title={item.webTitle}
                category={item.sectionId}
              />
            </div>
          ))}
        </SectionRow>
      )}
      {!showBookmarks && <EmptyResultText text="No bookmark found." />}
    </Layout>
  );
};

export default BookmarkPage;
