import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  line-height: 39px;
  letter-spacing: 0.07px;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: ${breakpoints.mobileM}) {
    font-size: 2.55rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 3.05rem;
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    font-size: 3.4rem;
  }
`;

export default SectionTitle;
