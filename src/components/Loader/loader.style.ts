import { LoaderProps } from './loader.interface';
import styled from 'styled-components';

export const LoaderWrap = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoader = styled.div<LoaderProps>`
  width: ${({ loaderSize }) => (loaderSize ? `${loaderSize}em` : '5em')};
  height: ${({ loaderSize }) => (loaderSize ? `${loaderSize}em` : '5em')};
  border-radius: 50%;
  border-top: 2px solid ${({ theme }) => theme.colors.sun};
  border-bottom: 2px solid ${({ theme }) => theme.colors.moon};
  animation: round 1s linear infinite;

  @keyframes round {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
