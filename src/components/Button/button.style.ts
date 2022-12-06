import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};
  padding: 7px 12px;
  border-radius: 4px;
  box-shadow: 0px 2px 6px ${({ theme }) => theme.colors.shadowColor(0.6)};
  letter-spacing: 0.3px;
  line-height: 22px;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeight.roboto['500']};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.shadowColor(0.3)};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus,
  &:active {
    box-shadow: none;
  }
`;
