import styled, { css } from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  position: relative;
  width: 360px;
  margin-top: 37px;
  border: 1px solid ${theme.body.someBorder};

  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const Title = styled.h2`
  font-size: 25px;
  text-align: center;
  font-weight: ${theme.body.fontNormal};
`;

const Border = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  border-top: 0.1px solid ${theme.body.someBorder};
`;
const MiniCon = styled.div`
  padding: 15px;
  
  & > div {
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ childrenIsBold }) =>
      childrenIsBold &&
      css`
        font-weight: ${theme.body.fontBolder};
      `}
  
`;

export { Container, Title, MiniCon, Border };
