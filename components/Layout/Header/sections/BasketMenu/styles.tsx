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
  padding: 10px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  ${({ modalType }) => {
    return (
      modalType === "basket" &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `
    );
  }}
`;

const ListContainer = styled.div`
  & > div {
    overflow: scroll;
    max-height: 240px;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 66px;
      padding: 8px;
      margin: 5px 0;
      border: 1px solid #d8d8d8;
    }

    width: 99%;
    margin: 0 auto;
    align-items: center;

    & > table {
      width: 99%;
      margin: 0px auto;
      border-spacing: 0px 7px;

      & > tbody {
        & > tr {
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);

          & > td {
            text-align: center;
            &:last-of-type {
              width: 40px;
            }
            & > div {
              width: max-content;
              text-align: left;
              margin: 0 auto;
            }
          }
        }
      }
    }
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
const Table = styled.table`
  width: 99%;
  margin: 0 auto;
  align-items: center;
  border-spacing: 0px 5px;

  & > tbody {
    & > tr {
      -webkit-box-shadow: 0px 0px 0px 0.5px rgba(216, 216, 216, 0.75);
      -moz-box-shadow: 0px 0px 0px 0.5px rgba(216, 216, 216, 0.75);
      box-shadow: 0px 0px 0px 0.5px rgba(216, 216, 216, 0.75);
      & > td {
        text-align: center;
        &:last-of-type {
          width: 40px;
        }
        & > div {
          width: max-content;
          text-align: left;
          margin: 0 auto;
        }
      }
    }
  }
`;

export { Container, ListContainer, MakeOrder, TotalPrice, Table };
