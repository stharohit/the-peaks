import { FallbackProps } from 'react-error-boundary';
import React from 'react';

const FallbackPage = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  return (
    <>
      <h2>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {error && error.toString()}
        <br />
        <button onClick={resetErrorBoundary}>Reset</button>
      </details>
    </>
  );
};

export default FallbackPage;
