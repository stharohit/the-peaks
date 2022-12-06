import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

const MAX_WIDTH = {
  tablet: 718,
  laptop: 954,
  laptopL: 1134,
};

const Container = styled.main`
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${MAX_WIDTH.tablet}px;
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    max-width: ${MAX_WIDTH.laptop}px;
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    max-width: ${MAX_WIDTH.laptopL}px;
  }
`;

export default Container;
