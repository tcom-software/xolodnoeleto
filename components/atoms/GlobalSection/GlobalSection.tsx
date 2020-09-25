import React from "react";
import styled, { css } from "styled-components";
import theme from "styles/theme";

const Global = styled.section`
  width: 100vw;
  ${({ background }) => {
    if (background) {
      return css`
        background: ${theme.content.background};
      `;
    }
  }}
`;

const Section = styled.div`
  width: ${theme.body.width};
  margin: ${theme.body.margin};

  @media (max-width: ${theme.body.width}) {
    width: 100vw;
  }
`;

const GlobalSection = ({ children, background }: any) => {
  return (
    <Global background={background}>
      <Section>{children}</Section>
    </Global>
  );
};
export default GlobalSection;
