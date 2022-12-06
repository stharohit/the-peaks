import { createContext, useContext } from 'react';

import { SnackbarCtx } from './snackbar.interface';

const SnackbarContext = createContext<SnackbarCtx>({
  duration: 0,
  isVisible: false,
  title: '',
  type: 'success',
  snackbar: () => null,
});

const { Provider: SnackbarProvider } = SnackbarContext;
const useSnackbarContext = (): SnackbarCtx => useContext(SnackbarContext);

export { SnackbarProvider, useSnackbarContext };
