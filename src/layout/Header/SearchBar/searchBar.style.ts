import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

const SEARCH_BTN_SIZE = 30;

const INITIAL_INPUT_WIDTH = 90;

const ICON_RIGHT_POS = INITIAL_INPUT_WIDTH / 2 - SEARCH_BTN_SIZE / 2;

const INPUT_PADDING = SEARCH_BTN_SIZE + ICON_RIGHT_POS;

export const SearchInputWrap = styled.div`
  position: relative;
  align-self: flex-end;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    height: 30px;
    color: ${({ theme }) => theme.colors.white};
    width: ${INITIAL_INPUT_WIDTH}px;
    outline: none;
    transition: width 0.3s ease-in-out, background 0.5s ease-in;

    &:focus,
    &.focus {
      width: 150px;
      background: ${({ theme }) => theme.colors.primaryLight};
      padding-left: 15px;
      padding-right: ${INPUT_PADDING}px;
    }
  }

  .search-btn {
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    width: ${SEARCH_BTN_SIZE}px;
    height: ${SEARCH_BTN_SIZE}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${ICON_RIGHT_POS}px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    input {
      height: 44px;

      &:focus,
      &.focus {
        width: 250px;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    input {
      &:focus,
      &.focus {
        width: 300px;
      }
    }
  }
`;
