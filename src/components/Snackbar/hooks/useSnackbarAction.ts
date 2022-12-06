import {
  SnackbarCtx,
  SnackbarProperties,
} from 'src/context/Snackbar/snackbar.interface';

import { useState } from 'react';

const INITIAL_SNACKBAR_PROPERTIES: SnackbarProperties = {
  duration: 500,
  isVisible: false,
  title: '',
  type: 'success',
};

const useSnackbarAction = (): SnackbarCtx => {
  const [properties, setProperties] = useState<SnackbarProperties>(
    () => INITIAL_SNACKBAR_PROPERTIES
  );
  const [timeOutNode, setTimeOutNode] = useState<NodeJS.Timeout>();

  const snackbar = ({
    duration = 2000,
    title,
    type,
    isVisible,
  }: SnackbarProperties) => {
    if (timeOutNode) clearTimeout(timeOutNode);
    setProperties((prev) => ({
      ...prev,
      duration: duration,
      title,
      type,
      isVisible: isVisible || true,
    }));

    const timeout = setTimeout(() => {
      setProperties((prev) => ({
        ...prev,
        duration: duration,
        title,
        type,
        isVisible: false,
      }));
      setTimeOutNode(undefined);
    }, duration);

    setTimeOutNode(timeout);
  };

  return { ...properties, snackbar };
};

export default useSnackbarAction;
