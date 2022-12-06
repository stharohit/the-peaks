import breakpoints from "src/theme/breakpoints";
import styled from "styled-components";

export const FOOTER_HEIGHT = {
  mobileS: 160,
  laptop: 200,
  laptopL: 243,
};

export const FooterWrap = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 1.6rem;
  gap: 10px;
  height: ${FOOTER_HEIGHT.mobileS}px;

  @media screen and (min-width: ${breakpoints.laptop}) {
    height: ${FOOTER_HEIGHT.laptop}px;
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    height: ${FOOTER_HEIGHT.laptopL}px;
    font-size: 1.8rem;
  }
`;
