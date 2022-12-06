import { FooterWrap } from './footer.style';
import Image from 'next/image';
import Logo from 'src/assets/images/logo.svg';
import React from 'react';

const Footer = () => {
  return (
    <FooterWrap>
      <Image src={Logo} alt="The Peaks" />
      <span>
        &copy; {new Date().getFullYear()}. All rights reserved. The Peaks.
      </span>
    </FooterWrap>
  );
};

export default Footer;
