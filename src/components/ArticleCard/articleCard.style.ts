import { StyledArticleCardProps } from './articleCard.interface';
import Link from 'next/link';
import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const ARTICLE_OVERLAY_HEIGHT = 138;

export const StyledArticleCard = styled(Link)<StyledArticleCardProps>`
  display: block;
  position: relative;
  min-height: ${ARTICLE_OVERLAY_HEIGHT}px;
  height: 100%;
  border-bottom: 3px solid
    ${({ theme, category }) => theme.colors.cardBorder[category]};
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.shadowColor(0.6)};
  }

  .article-img {
    position: relative;
    width: 100%;
    height: 347px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .default-img {
    position: relative;
    min-height: 347px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.cardBg};

    img {
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      width: 180px;
      height: auto;
    }
  }

  .card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    padding: 10px;
    z-index: 10;
    background: ${({ theme }) => theme.colors.cardOverlayBg};
    font-size: 8px;
    height: ${ARTICLE_OVERLAY_HEIGHT}px;

    h2 {
      font-size: 2em;
      margin-top: 0;
      line-height: 29px;
      letter-spacing: 0.07px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 4px;
    }

    p {
      font-size: 1.4em;
      line-height: 20px;
      letter-spacing: 0.1px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 0;
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    .card-overlay {
      font-size: 10px;

      h2 {
        -webkit-line-clamp: 2;
      }

      p {
        -webkit-line-clamp: 2;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.laptopL}) {
    .card-overlay {
      h2 {
        margin-bottom: 8px;
      }
    }

    .default-img {
      position: relative;
      background-color: ${({ theme }) => theme.colors.cardBg};

      img {
        width: 238px;
      }
    }
  }
`;
