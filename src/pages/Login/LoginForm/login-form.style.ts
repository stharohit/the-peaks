import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cfe2f1;

  .input-wrap {
    margin-bottom: 12px;
  }

  .form-card {
    background: #2b4b7c;
    padding: 50px 30px;
    border-radius: 10px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
    width: 320px;
  }

  label {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 4px;
    color: #fff;
  }

  input {
    display: block;
    width: 100%;
    height: 40px;
  }

  button {
    width: 100%;
    padding: 12px 14px;
    color: #fff;
    border-radius: 4px;
    border: none;
    background: #000;
    cursor: pointer;
  }
`;