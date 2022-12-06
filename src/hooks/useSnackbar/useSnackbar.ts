import { useSnackbarContext } from 'src/context/Snackbar/Snackbar.context';

const useSnackbar = () => {
  const { snackbar } = useSnackbarContext();

  return { snackbar };
};

export default useSnackbar;
