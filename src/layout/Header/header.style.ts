import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const NAV_HEIGHT = {
  mobileS: 70,
  laptop: 90,
  laptopL: 126,
};

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryColor};

  nav {
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    justify-content: space-between;

    .logo {
      width: 75px;
      height: auto;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    nav {
      height: ${NAV_HEIGHT.mobileS}px;
      flex-direction: row;
    }

    .header-right {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    nav {
      height: ${NAV_HEIGHT.laptop}px;

      .logo {
        width: 120px;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    nav {
      height: ${NAV_HEIGHT.laptopL}px;

      .logo {
        width: 142px;
      }
    }
  }
`;
