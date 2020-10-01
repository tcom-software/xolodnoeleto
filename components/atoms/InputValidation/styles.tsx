import styled, { css } from "styled-components";

const InputContainer = styled.div``;

const Input = styled.input`
  transition: 0.5s all ease-in;
  width: 100%;
  padding: 13px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  color: #202020;

  ${({ errorStyle }) => {
    if (errorStyle) {
      return css`
        transition: 0.5s all ease-in;
        border: 1px solid #a94442;
        color: #a94442;
      `;
    }
  }}
`;

const Message = styled.div`
  transition: 0.5s all ease-in;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #c4c4c4;
  font-size: 14px;

  ${({ errorStyle }) => {
    if (errorStyle) {
      return css`
        transition: 1s all ease-in;
        white-space: nowrap;
        width: 300px;
        color: #a94442;
      `;
    }
  }}
`;

export { Input, Message, InputContainer };
