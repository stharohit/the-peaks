import { ArticleSearchProvider } from 'src/context/ArticleSearch/ArticleSearch.context';
import { BookmarkProvider } from 'src/context/Bookmark/Bookmark.context';
import { CommonProviderProps } from './provider.interface';
import { SnackbarProvider } from 'src/context/Snackbar/Snackbar.context';
import GlobalStyles from 'src/styles/GlobalStyles';
import React from 'react';
import useArticleSearchAction from 'src/hooks/useArticleSearchAction/useArticleSearchAction';
import useBookmarkAction from 'src/hooks/useBookmarkAction/useBookmarkAction';
import useSnackbarAction from 'src/components/Snackbar/hooks/useSnackbarAction';

const ActionProvider = ({ children }: CommonProviderProps) => {
  const articleSearchValue = useArticleSearchAction();
  const bookmarkValue = useBookmarkAction();
  const snackbarValue = useSnackbarAction();

  return (
    <ArticleSearchProvider value={articleSearchValue}>
      <BookmarkProvider value={bookmarkValue}>
        <SnackbarProvider value={snackbarValue}>
          <GlobalStyles />
          {children}
        </SnackbarProvider>
      </BookmarkProvider>
    </ArticleSearchProvider>
  );
};

export default ActionProvider;
