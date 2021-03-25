import styled, { css } from "styled-components";

const CheckBoxContainer = styled.div`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => (radius ? radius : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  position: ${({ position }) => (position ? position : "unset")};

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 80%;
    height: 80%;
  }
`;

export { CheckBoxContainer };
