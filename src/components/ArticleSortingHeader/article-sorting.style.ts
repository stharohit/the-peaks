import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const ArticleSortingWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;

  h1 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  .article-sorting-right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .select-wrap {
    position: relative;
  }

  .bookmark-btn {
    svg {
      width: 9px;
      height: auto;
    }

    .text {
      display: none;
    }
  }

  select {
    height: 30px;
    color: ${({ theme }) => theme.colors.text};
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.colors.borderGrey};
    background-color: transparent;
    width: 100px;
    appearance: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.09px;
    outline: none;
    padding-bottom: 9px;
    padding-left: 5px;
    background-image: ${({
      theme,
    }) => `linear-gradient(45deg, transparent 50%, ${theme.colors.text} 50%),
    linear-gradient(135deg, ${theme.colors.text} 50%, transparent 50%)`};
    background-position: calc(100% - 20px) calc(1em + -5px),
      calc(100% - 15px) calc(1em + -5px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;

    option {
      background-color: ${({ theme }) => theme.colors.mainBg};
    }
  }

  @media screen and (min-width: ${breakpoints.mobileM}) {
    align-items: flex-end;

    h1 {
      font-size: 3.4rem;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;

    h1 {
      font-size: 4.4rem;
      line-height: 48px;
    }

    .bookmark-btn {
      svg {
        width: 12px;
        height: auto;
      }

      .text {
        display: inline;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
    }

    select {
      width: 150px;
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    select {
      width: 255px;
    }
  }
`;
