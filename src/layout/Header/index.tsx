/* eslint-disable @next/next/no-img-element */
import { StyledHeader } from './header.style';
import Container from 'src/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'src/assets/images/logo.svg';
import React from 'react';
import SearchBar from './SearchBar';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <Link href="/" shallow>
            <Image
              priority={true}
              className="logo"
              src={Logo}
              alt="The Peaks"
            />
          </Link>
          <div className="header-right">
            <SearchBar />
            <ThemeSwitcher />
          </div>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
