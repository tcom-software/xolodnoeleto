import styled, { css } from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  display: none;
  position: absolute;
  top: 56px;
  right: -1px;
  z-index: 2;
  width: 616px;
  height: 383px;
  padding: 15px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  ${({ whatMenu }) => {
    return (
      whatMenu === "basket" &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `
    );
  }}
`;

const ListContainer = styled.div`
  overflow: scroll;
  max-height: 240px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 66px;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #d8d8d8;
  }
`;
const MakeOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 110px;
  padding-top: 15px;
  border-top: 1px solid #d8d8d8;
`;
const TotalPrice = styled.p`
  font-size: 16px;
  font-weight: ${theme.body.fontBolder};
  color: ${theme.body.primaryColor};

  & > span {
    font-size: 16px;
    margin-left: 65px;
  }
`;

export { Container, ListContainer, MakeOrder, TotalPrice };
