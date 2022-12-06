import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fourOfour from 'src/assets/images/404.jpg';
import styled from 'styled-components';

const ErrorPageWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1 {
    font-size: 4em;
    text-align: center;
  }

  a {
    font-size: 1.8em;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const FourOFour = () => {
  return (
    <ErrorPageWrap>
      <Image src={fourOfour} alt="404 error" width={300} height={300} />
      <h1>Page Not Found.</h1>
      <Link href="/">Go to home</Link>
    </ErrorPageWrap>
  );
};

export default FourOFour;
