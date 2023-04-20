/* eslint-disable @next/next/no-img-element */
import { StyledHeader } from './header.style';
import {useRouter} from "next/router";
import Container from 'src/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'src/assets/images/logo.svg';
import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const onLogOut = () => {
    localStorage.removeItem('credential');
    router.push('/');
  }

  useEffect(() => {
    const credential = JSON.parse(localStorage.getItem('credential') || '{}');
    const hasEmail = 'email' in credential;
    if (!hasEmail) return;
    setEmail(credential.email);
  }, [])

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
          <h2 className="greeting">Hi, {email}</h2>
          <div className="header-right">
            <SearchBar />
            <ThemeSwitcher />
            <button type="button" onClick={onLogOut}>Logout</button>
          </div>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
