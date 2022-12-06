import { LoaderWrap, StyledLoader } from './loader.style';

import { LoaderProps } from './loader.interface';
import React from 'react';

const Loader = (props: LoaderProps) => {
  return (
    <LoaderWrap>
      <StyledLoader data-testid="loader" {...props} />
    </LoaderWrap>
  );
};

export default Loader;
