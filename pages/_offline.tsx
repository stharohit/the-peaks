import Image from 'next/image';
import Layout from 'src/layout';
import Logo from 'src/assets/images/logo.svg';
import React from 'react';
import styled from 'styled-components';

const OfflineWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50vh;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.4rem;
  }
`;

const Offline = () => {
  return (
    <Layout>
      <OfflineWrap>
        <Image src={Logo} alt="The Peaks" width={142} height={50} />
        <h1>No internet connection</h1>
        <h2>Please refresh after connection is stable</h2>
      </OfflineWrap>
    </Layout>
  );
};

export default Offline;
