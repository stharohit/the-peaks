export type SnackbarType = 'success' | 'danger';

export interface SnackbarProperties {
  isVisible?: boolean;
  title: string;
  type: SnackbarType;
  duration?: number;
}

export interface SnackbarCtx extends SnackbarProperties {
  snackbar: (props: SnackbarProperties) => void;
}
