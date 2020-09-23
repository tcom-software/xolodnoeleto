import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const Label = styled.label``;

const Input = styled.input`
  border: none;
  width: 100%;
  background: #ffffff;

  ${({ props }) => {
    return css`
      height: ${props.height - 2}px;
    `;
  }}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${theme.input.border};

  ${({ props }) => {
    return css`
      width: ${props.width}px;
      height: ${props.height}px;
    `;
  }}
`;

export { Label, Input, Container, InputBorder };
