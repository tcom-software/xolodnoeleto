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

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  ${({ whatMenu }) => {
    return (
      whatMenu === "basket" &&
      css`
        display: flex;
      `
    );
  }}
`;
const ListContainer = styled.div``;
const ItemStyle = styled.div``;

export { Container, ListContainer, ItemStyle };
