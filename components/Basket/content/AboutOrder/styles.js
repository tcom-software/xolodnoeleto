import styled, { css } from "styled-components";
import theme from "styles/theme";

const AboutOrderContainer = styled.div`
  background: #fff;
  position: relative;
  width: 360px;
  margin-top: 0px;
  border: 1px solid ${theme.body.someBorder};

  ${({ stepState }) => {
    if (stepState !== 1) {
      return css`
        margin-top: 0;
      `;
    }
  }}}

  @media (max-width: 1200px) {
    border: none;
    width: 100%;
    order: -1;
    background: ${theme.body.secondBackground};
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
  }

  &:last-of-type > div > p {
    font-size: 16px;
    font-weight: ${theme.body.fontBolder};
  }
`;

export { AboutOrderContainer, Title, MiniCon, Border };
