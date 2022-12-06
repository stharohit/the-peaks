import { ReactNode } from 'react';
import { SnackbarType } from 'src/context/Snackbar/snackbar.interface';

export interface SnackbarProps {
  children: ReactNode;
}

export interface StyledSnackbarProps {
  snackbarType: SnackbarType;
}
