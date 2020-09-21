import React from "react";
import styled, { css } from "styled-components";
interface ButtonInterface {
  variant: string;
}

export const Button = styled.Button<ButtonInterface>`
  cursor: pointer;
  padding: ${({ theme }) => theme.buttons.padding};

  ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return css`
          color: white;
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
    }
  }}
`;
