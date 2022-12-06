import styled from 'styled-components';

export const StyledSwitch = styled.div`
  display: flex;

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 30px;
    height: 15px;
    background: grey;
    display: block;
    border-radius: 50px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 0;
    left: 1px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  input:checked + label {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  input:checked + label:after {
    left: 100%;
    transform: translateX(-100%);
  }

  label:active:after {
    width: 40px;
  }
`;
