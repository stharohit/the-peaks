import { FOOTER_HEIGHT } from './Footer/footer.style';
import { NAV_HEIGHT } from './Header/header.style';
import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const LayoutContentWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  min-height: calc(
    100vh - ${NAV_HEIGHT.mobileS}px - ${FOOTER_HEIGHT.mobileS}px
  );
  padding-top: 44px;
  padding-bottom: 105px;

  @media screen and (min-width: ${breakpoints.laptop}) {
    min-height: calc(
      100vh - ${NAV_HEIGHT.laptop}px - ${FOOTER_HEIGHT.laptop}px
    );
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    min-height: calc(
      100vh - ${NAV_HEIGHT.laptopL}px - ${FOOTER_HEIGHT.laptopL}px
    );
  }
`;
