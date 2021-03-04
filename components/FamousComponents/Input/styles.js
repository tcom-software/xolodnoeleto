import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const Label = styled.label``;

const InputBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.input.borderColor};

  .menuButtonPoints {
    transition: 0.3s all ease-in;
    height: 35px;
    width: max-content;
    padding: 0 10px;
    font-size: 12px;
    p {
      white-space: nowrap;
      width: max-content;
      max-width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    ${({ width, height }) => {
      return css`
        width: ${width};
        height: ${height};
      `;
    }}
  }
`;

const InputStyled = styled.input`
  border: none;
  width: 100%;

  ${({ height }) => {
    return css`
      height: ${height}px;
    `;
  }}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export { Label, InputStyled, Container, InputBorder };
