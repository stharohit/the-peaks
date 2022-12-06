import { SingleArticleContent } from 'src/api/singleArticle.api';
import { useBookmarkContext } from 'src/context/Bookmark/Bookmark.context';
import { useEffect, useState } from 'react';
import { useSnackbarContext } from 'src/context/Snackbar/Snackbar.context';

const useInitBookmarkActionBtn = (content: SingleArticleContent) => {
  const { snackbar } = useSnackbarContext();

  const { addBookmark, checkBookmark, removeBookmark, bookmarks } =
    useBookmarkContext();
  const id = content.id;

  const [isBookmarked, setIsBookmarked] = useState<boolean>(() =>
    checkBookmark(id)
  );

  const handleClick = () => {
    if (isBookmarked) {
      snackbar({
        type: 'danger',
        title: 'removed from bookmarks',
      });
      removeBookmark(id);
    } else {
      snackbar({
        type: 'success',
        title: 'saved to bookmarks',
      });
      addBookmark(content);
    }
  };

  useEffect(() => {
    setIsBookmarked(checkBookmark(id));
  }, [bookmarks]);

  return { handleClick, isBookmarked };
};

export default useInitBookmarkActionBtn;
