import { StyledSnackbar } from './snackbar.style';
import { useSnackbarContext } from 'src/context/Snackbar/Snackbar.context';
import IconBookmarkOutline from '../Icons/IconBookmarkOutline';
import React from 'react';

const Snackbar = () => {
  const { isVisible, title, type } = useSnackbarContext();

  return (
    <StyledSnackbar
      data-testid="snackbar"
      className={isVisible ? 'active' : ''}
      snackbarType={type}
    >
      <IconBookmarkOutline /> {title}
    </StyledSnackbar>
  );
};

export default Snackbar;
