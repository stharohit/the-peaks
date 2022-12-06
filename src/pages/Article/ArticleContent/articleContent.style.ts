import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const ArticlePublishDate = styled.span`
  display: block;
  font-size: 12px;
  line-height: 31px;
  letter-spacing: 0.83px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 18px;
  margin-bottom: 8px;
`;

export const ArticleHeadline = styled.h2`
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.07px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0;
`;

export const ArticleContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  .main-title {
    margin-bottom: 10px;
  }

  .main-img-wrap {
    position: relative;
    width: 100%;
    height: 267px;

    figure {
      margin: 0;
    }

    img {
      width: 100%;
      height: auto;
    }

    figcaption {
      margin-top: 5px;
    }
  }

  .article-col-right,
  .article-col-left {
    width: 100%;
  }

  .article-col-right {
    order: 1;
  }

  .article-col-left {
    order: 2;
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    gap: 30px;

    .article-col-left {
      width: calc(60% - 15px);
      flex: 0 0 calc(60% - 15px);
      order: 1;
    }

    .article-col-right {
      width: calc(60% - 15px);
      flex: 0 0 calc(40% - 15px);
      order: 2;
    }
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    .article-col-left {
      flex: 0 0 635px;
    }

    .article-col-right {
      flex: 0 0 calc(100% - 635px - 30px);
    }
  }
`;

export const ArticleContentSeparator = styled.hr`
  height: 0;
  border-top: 1px solid #979797;
  margin-top: 15px;
  margin-bottom: 15px;
  mix-blend-mode: normal;
  opacity: 0.2;
`;

export const ArticleBody = styled.div`
  margin-top: 15px;

  img {
    width: 100%;
    height: auto;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.link};
  }

  em {
    font-weight: 500;
  }
`;

export const DummyImage = styled.div`
  position: relative;
  height: 267px;
  background-color: ${({ theme }) => theme.colors.cardBg};

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;
