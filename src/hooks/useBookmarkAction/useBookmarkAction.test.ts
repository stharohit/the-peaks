import '@testing-library/jest-dom/extend-expect';
import { Bookmarks } from 'src/context/Bookmark/bookmark.interface';
import { ORDER_TYPE } from 'src/constants/orderType';
import { act, renderHook } from '@testing-library/react';
import useBookmarkAction, { sortBookmark } from './useBookmarkAction';

const addHoursToDate = (n: number) => {
  const date = new Date('2022-12-12');
  date.setHours(n);

  return date.toISOString();
};

describe('Bookmark test', () => {
  const getHook = () => ({
    ...renderHook(() => useBookmarkAction()),
    num1: Math.random() * 500,
    num2: Math.random() * 1000,
  });

  const getBookmark = (n: number): Bookmarks => ({
    fields: {
      thumbnail: '',
      trailText: '',
    },
    id: n.toString(),
    webPublicationDate: addHoursToDate(n),
    webTitle: '',
    sectionId: ''
  });

  test('initial value to be empty', () => {
    const { result } = getHook();
    expect(result.current.bookmarks.length).toBe(0);
  });

  test('to add bookmark', () => {
    const { result, num1 } = getHook();
    act(() => {
      result.current.addBookmark(getBookmark(num1));
    });
    expect(result.current.bookmarks[0]).toEqual(getBookmark(num1));
  });

  test('to check bookmark exist', () => {
    const { result, num1 } = getHook();
    act(() => {
      result.current.addBookmark(getBookmark(num1));
    });
    const isBookmarked = result.current.checkBookmark(getBookmark(num1).id);
    expect(isBookmarked).toBeTruthy();
  });

  test('to check if bookmark is sorted', () => {
    const { result, num1, num2 } = getHook();
    const initialBookmarks = result.current.bookmarks;
    const newBookmarks = [
      ...initialBookmarks,
      getBookmark(num1),
      getBookmark(num2),
    ];

    act(() => {
      result.current.addBookmark(getBookmark(num1));
      result.current.addBookmark(getBookmark(num2));
      result.current.sortByPublishedDate('oldest');
    });
    expect(result.current.bookmarks).toEqual(
      sortBookmark(newBookmarks, 'oldest')
    );

    act(() => {
      result.current.sortByPublishedDate(ORDER_TYPE.newest);
    });
    expect(result.current.bookmarks).toEqual(
      sortBookmark(newBookmarks, ORDER_TYPE.newest)
    );
  });

  test('to check if bookmark is removed', () => {
    const { result, num1, num2 } = getHook();
    const initialBookmarks = result.current.bookmarks;

    act(() => {
      result.current.addBookmark(getBookmark(num1));
      result.current.addBookmark(getBookmark(num2));
    });

    const sortedBookmarks = sortBookmark(
      [...initialBookmarks, getBookmark(num2), getBookmark(num1)],
      ORDER_TYPE.newest
    );

    expect(result.current.bookmarks).toEqual(sortedBookmarks);
    act(() => {
      result.current.removeBookmark(getBookmark(num2).id);
    });

    expect(result.current.bookmarks.length).toBe(sortedBookmarks.length - 1);
  });
});
