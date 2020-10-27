import styled, { css } from "styled-components";
import theme from "styles/theme";

const InputContainer = styled.div`
  .datepicker-container {
    position: relative;

    .react-datepicker-wrapper {
      width: 100%;
      .react-datepicker__input-container {
        width: 100%;
        input {
          width: 100%;
          height: 47px;
          padding: 13px;
          border: 1px solid ${theme.body.someBorder};
        }
      }
    }

    svg {
      &:nth-of-type(1) {
        position: absolute;
        top: 12px;
        right: 16px;
      }
      &:nth-of-type(2) {
        position: absolute;
        top: 26px;
        right: 16px;
      }
    }
  }
  .datepicker-error {
    transition: 0.5s all ease-in;
    white-space: nowrap;
    color: ${theme.error.color};
    border: 1px solid ${theme.error.color};
  }

  .upload-image-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 47px;
    padding: 13px;
    background: #fff;
    margin-bottom: 14px;
    color: ${theme.body.primaryColor};
    border: 1px solid ${theme.body.someBorder};
  }
`;

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
  transition: 0.3s all ease-in;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #c4c4c4;
  font-size: 12px;

  ${({ errorStyle }) => {
    if (errorStyle) {
      return css`
        transition: 0.5s all ease-in;
        white-space: nowrap;
        width: 300px;
        color: ${theme.error.color};
      `;
    }
  }}
`;

const Textarea = styled.textarea`
  transition: 0.5s all ease-in;
  padding: 13px;
  resize: none;
  width: 100%;
  height: 160px;
  color: ${theme.body.color};
  border: 1px solid ${theme.input.borderColor};

  ${({ errorStyle }) => {
    if (errorStyle) {
      return css`
        transition: 0.5s all ease-in;
        white-space: nowrap;
        color: ${theme.error.color};
        border: 1px solid ${theme.error.color};
      `;
    }
  }}
`;

export { Input, Message, InputContainer, Textarea };
