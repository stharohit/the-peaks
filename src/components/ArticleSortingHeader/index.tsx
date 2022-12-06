import { ArticleSortingHeaderProps } from './article-sorting.interface';
import { ArticleSortingWrap } from './article-sorting.style';
import { IconBookmark } from '../Icons';
import { useRouter } from 'next/router';
import Button from '../Button';
import React from 'react';

const ArticleSortingHeader = (props: ArticleSortingHeaderProps) => {
  const { title, onSort, hideBookmarkBtn } = props;
  const router = useRouter();

  const goToBookmark = () => router.push('/bookmark');

  return (
    <ArticleSortingWrap>
      <h1>{title}</h1>
      <div className="article-sorting-right">
        {!hideBookmarkBtn && (
          <Button
            title="View Bookmark"
            onClick={goToBookmark}
            className="bookmark-btn"
          >
            <IconBookmark /> <span className="text">VIEW BOOKMARK</span>
          </Button>
        )}
        <select data-testid="sort-select" onChange={onSort}>
          <option data-testid="sort-select-option" value="newest">
            Newest
          </option>
          <option data-testid="sort-select-option" value="oldest">
            Oldest
          </option>
        </select>
      </div>
    </ArticleSortingWrap>
  );
};

export default ArticleSortingHeader;
