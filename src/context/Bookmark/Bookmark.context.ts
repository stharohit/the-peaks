import { createContext, useContext } from 'react';

import { BookmarkCtx } from './bookmark.interface';

const BookmarkContext = createContext<BookmarkCtx>({
  addBookmark: () => null,
  checkBookmark: () => true,
  removeBookmark: () => null,
  sortByPublishedDate: () => null,
  bookmarks: [],
});

const { Provider: BookmarkProvider } = BookmarkContext;
const useBookmarkContext = (): BookmarkCtx => useContext(BookmarkContext);

export { BookmarkProvider, useBookmarkContext };
