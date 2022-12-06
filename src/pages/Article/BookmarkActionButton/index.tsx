import React from 'react';

import { BookmarkActionButtonProps } from './bookmarkAction.interface';
import { IconBookmark } from 'src/components/Icons';
import Button from 'src/components/Button';
import useInitBookmarkActionBtn from '../hooks/useInitBookmarkActionBtn';

const BookmarkActionButton = (props: BookmarkActionButtonProps) => {
  const { content } = props;
  const { handleClick, isBookmarked } = useInitBookmarkActionBtn(content);

  return (
    <Button onClick={handleClick}>
      <IconBookmark /> {isBookmarked ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
    </Button>
  );
};

export default BookmarkActionButton;
