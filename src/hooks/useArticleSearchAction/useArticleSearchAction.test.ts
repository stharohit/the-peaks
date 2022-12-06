import { ArticleSearchCtx } from 'src/context/ArticleSearch/articleSearch.interface';
import { ORDER_TYPE } from 'src/constants/orderType';
import { RenderHookResult, act, renderHook } from '@testing-library/react';
import MockProvider from 'src/helpers/test/MockProvider';
import useArticleSearchAction from './useArticleSearchAction';

describe('Test search action', () => {
  test('initial state', () => {
    const { result } = getArticleAction();
    expect(result.current.articles).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.orderBy).toBe(ORDER_TYPE.newest);
    expect(result.current.queryText).toBeFalsy();
  });

  test('search query', async () => {
    const action = getArticleAction();
    searchQuery(action);
  });

  test('sorting', async () => {
    const action = getArticleAction();
    sorting(action);
  });

  test('reset', async () => {
    const action = getArticleAction();
    sorting(action);
    searchQuery(action);
    act(() => {
      action.result.current.resetAll();
    });
    expect(action.result.current.orderBy).toBe(ORDER_TYPE.newest);
    expect(action.result.current.queryText).toBeFalsy();
  });
});

const getArticleAction = () =>
  renderHook(() => useArticleSearchAction(), { wrapper: MockProvider });

const searchQuery = ({
  result,
}: RenderHookResult<ArticleSearchCtx, unknown>) => {
  act(() => {
    result.current.onSearch('s');
  });
  expect(result.current.queryText).toBe('s');
};

const sorting = ({ result }: RenderHookResult<ArticleSearchCtx, unknown>) => {
  act(() => {
    result.current.sortBy(ORDER_TYPE.oldest);
  });
  expect(result.current.orderBy).toBe(ORDER_TYPE.oldest);
};
