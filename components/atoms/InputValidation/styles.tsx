import styled, { css } from "styled-components";
import theme from "styles/theme";

const InputContainer = styled.div``;

const Input = styled.input`
  transition: 0.5s all ease-in;
  width: 100%;
  padding: 13px;
  box-sizing: border-box;
  border: 1px solid ${theme.input.borderColor};
  color: ${theme.body.color};

  ${({ errorStyle }) => {
    if (errorStyle) {
      return css`
        transition: 0.5s all ease-in;
        border: 1px solid ${theme.error.color};
        color: ${theme.error.color};
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
  font-size: 12px;

  ${({ errorStyle }) => {
    if (errorStyle) {
      return css`
        transition: 1s all ease-in;
        white-space: nowrap;
        width: 300px;
        color: ${theme.error.color};
      `;
    }
  }}
`;

export { Input, Message, InputContainer };
