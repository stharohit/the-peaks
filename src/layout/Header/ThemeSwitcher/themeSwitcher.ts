import styled from 'styled-components';

export const StyledThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  svg {
    width: 18px;
    height: auto;

    &:first-child {
      color: ${({ theme }) => theme.colors.sun};
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.moon};
    }
  }
`;
