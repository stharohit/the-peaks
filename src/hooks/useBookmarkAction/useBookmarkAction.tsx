import {
  BookmarkCtx,
  Bookmarks,
} from 'src/context/Bookmark/bookmark.interface';
import { ORDER_TYPE } from 'src/constants/orderType';
import { OrderType } from 'src/api/common.interface';
import { useEffect, useState } from 'react';
import useLocalStorage from '../useLocalStorage';

const BOOKMARK_STORAGE_NAME = 'Bookmarks';

const getDateStamp = (dateString: string) => {
  const date = new Date(dateString);

  return Math.floor(date.getTime() / 1000);
};

export const sortBookmark = (
  item: BookmarkCtx['bookmarks'],
  orderBy: OrderType
) => {
  if (orderBy === ORDER_TYPE.newest)
    return item.sort(
      (a, b) =>
        getDateStamp(b.webPublicationDate) - getDateStamp(a.webPublicationDate)
    );
  else
    return item.sort(
      (a, b) =>
        getDateStamp(a.webPublicationDate) - getDateStamp(b.webPublicationDate)
    );
};

const useBookmarkAction = (): BookmarkCtx => {
  const { storage, setStorageItem, getStorageItem } = useLocalStorage<
    Bookmarks[]
  >(BOOKMARK_STORAGE_NAME, []);

  const [bookmarks, setBookmarks] = useState<Bookmarks[]>(() => storage || []);

  const addBookmark = (item: Bookmarks) => {
    setBookmarks((prev) => sortBookmark([...prev, item], ORDER_TYPE.newest));
    setStorageItem(sortBookmark([...bookmarks, item], ORDER_TYPE.newest));
  };

  const checkBookmark = (id: string) =>
    bookmarks.some((item) => item.id === id);

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => [...prev.filter((item) => item.id !== id)]);
    setStorageItem([...bookmarks.filter((item) => item.id !== id)]);
  };

  const sortByPublishedDate = (orderBy: OrderType) => {
    setBookmarks((prev) => sortBookmark([...prev], orderBy));
  };

  useEffect(() => {
    setBookmarks(getStorageItem);
  }, []);

  return {
    addBookmark,
    bookmarks,
    checkBookmark,
    removeBookmark,
    sortByPublishedDate,
  };
};

export default useBookmarkAction;
