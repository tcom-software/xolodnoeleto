import React from "react";
import { ButtonInterface } from "interfaces";
import styled, { css } from "styled-components";

const Button = styled.button<ButtonInterface>`
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return css`
          color: #ffffff;
          border: none;
          background: ${theme.buttons.primary.background};
        `;
        break;
      case "secondary":
        return css`
          background: none;
          color: #b1aeae;
          background: ${theme.buttons.secondary.background};
        `;
      case "with-icon":
        return css`
          color: ${theme.buttons.withIcon.color};
          border: ${theme.buttons.withIcon.border};
          background: ${theme.buttons.withIcon.background};
        `;
        break;
      default:
    }
  }}
`;

export default Button;
