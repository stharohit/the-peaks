import { StyledSnackbarProps } from './snackbar.interface';
import styled from 'styled-components';

export const StyledSnackbar = styled.div<StyledSnackbarProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme, snackbarType }) => theme.colors[snackbarType]};
  color: #fff;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  z-index: 9999;
  visibility: hidden;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
