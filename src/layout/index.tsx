import { LayoutContentWrap } from './layout.style';
import { LayoutProps } from './interface';
import {useRouter} from "next/router";
import Container from 'src/components/Container';
import Head from 'next/head';
import Header from './Header';
import React, {useEffect} from 'react';
import Snackbar from 'src/components/Snackbar';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'));

const Layout = (props: LayoutProps) => {
    const router = useRouter();
    const { children, title } = props;

    useEffect(() => {
        const credential = localStorage.getItem('credential');
        if (!credential) router.push('/');
    }, []);

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
