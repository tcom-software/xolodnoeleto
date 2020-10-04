import theme from "../../../styles/theme";
import styled, { css } from "styled-components";

export const Global = styled.section`
  width: 100vw;

  ${({ overflowStyle }) => {
    if (overflowStyle) {
      return css`
        overflowstyle: hidden;
      `;
    }
  }}
  ${({ borderTop }) => {
    if (borderTop) {
      return css`
        border-top: 0.5px solid #0000000d;
      `;
    }
  }}
  ${({ borderBottom }) => {
    if (borderBottom) {
      return css`
        border-bottom: 0.5px solid #0000000d;
      `;
    }
  }}
  ${({ webBackground }) => {
    if (webBackground) {
      return css`
        background: ${webBackground};
      `;
    }
  }}
  ${({ isWeb }) => {
    if (isWeb) {
      return css`
        display: block;
      `;
    }
  }}

  @media(max-width: ${theme.mobileMedia.size}) {
    display: none;
    ${({ isMobile }) => {
      if (isMobile) {
        return css`
          display: block;
        `;
      }
    }}
    ${({ mobileBackground }) => {
      if (mobileBackground) {
        return css`
          background: ${mobileBackground};
        `;
      }
    }}
  }
`;

export const Section = styled.div`
  width: ${theme.body.width};
  margin: ${theme.body.margin};

  @media (max-width: ${theme.body.width}) {
    width: 100vw;
  }
`;

export const MiniDiv = styled.div`
  padding: 8px 0;

  ${({ webPadding }) =>
    webPadding &&
    css`
      padding: ${webPadding};
    `}

  @media (max-width: ${theme.mobileMedia.size}) {
    padding: 8px 8px;

    ${({ mobilePadding }) =>
      mobilePadding &&
      css`
        padding: ${mobilePadding};
      `}
  }
`;
