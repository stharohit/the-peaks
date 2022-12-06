import ARTICLE_LIST_GAP from 'src/constants/cardGap';
import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const TopNewsFirstSection = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: ${ARTICLE_LIST_GAP.mobileS}px;
  margin-bottom: 15px;

  .top-news-left,
  .top-news-right {
    width: 100%;
  }

  .top-news-right {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: ${ARTICLE_LIST_GAP.mobileS}px;
  }

  .top-news-right-col {
    width: 100%;
  }

  @media screen and (min-width: 567px) {
    .top-news-right-col {
      width: calc(50% - ${ARTICLE_LIST_GAP.mobileS / 2}px);
      flex: 0 0 calc(50% - ${ARTICLE_LIST_GAP.mobileS / 2}px);
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    gap: ${ARTICLE_LIST_GAP.laptop}px;
    margin-bottom: 30px;

    .top-news-left,
    .top-news-right,
    .top-news-right-col {
      width: auto;
      flex: 0 0 calc(50% - ${ARTICLE_LIST_GAP.laptop / 2}px);
    }

    .top-news-left .article-img {
      height: 100%;
    }

    .top-news-right-col .article-img,
    .top-news-right-col .default-img {
      min-height: 252px;
      height: auto;
    }

    .top-news-left .card-overlay {
      font-size: 12px;
    }

    .top-news-left .card-overlay p {
      font-size: 14px;
    }

    .top-news-right-col .card-overlay {
      font-size: 9px;
    }

    .top-news-right-col:nth-child(-n + 2) .card-overlay {
      height: 107px;
    }

    .top-news-right {
      gap: ${ARTICLE_LIST_GAP.laptop}px;
    }
  }
`;
