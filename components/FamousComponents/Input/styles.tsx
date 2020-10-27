import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const Label = styled.label``;

const Input = styled.input`
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

const InputBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${theme.input.borderColor};

  ${({ width, height }) => {
    return css`
      width: ${width};
      height: ${height};
    `;
  }}
`;

export { Label, Input, Container, InputBorder };
