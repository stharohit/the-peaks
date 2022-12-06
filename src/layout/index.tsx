import { LayoutContentWrap } from './layout.style';
import { LayoutProps } from './interface';
import Container from 'src/components/Container';
import Head from 'next/head';
import Header from './Header';
import React from 'react';
import Snackbar from 'src/components/Snackbar';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'));

const Layout = (props: LayoutProps) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title || 'The Peaks'}</title>
      </Head>
      <Header />
      <LayoutContentWrap>
        <Container>{children}</Container>
      </LayoutContentWrap>
      <Footer />
      <Snackbar />
    </>
  );
};

export default Layout;
