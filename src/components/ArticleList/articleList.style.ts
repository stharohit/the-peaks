import ARTICLE_LIST_GAP from 'src/constants/cardGap';
import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const SectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: ${ARTICLE_LIST_GAP.mobileS}px;
  margin-bottom: 20px;

  .col {
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;

    .col {
      flex: 0 0 calc(50% - 7.5px);
      max-width: calc(50% - 7.5px);
      width: auto;
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    gap: ${ARTICLE_LIST_GAP.laptop}px;
    margin-bottom: 50px;

    .col {
      flex: 0 0 calc(50% - 15px);
      max-width: 450px;
    }
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    .col {
      flex: 0 0 calc(33.33% - 7px);
      max-width: 350px;
    }
  }
`;
