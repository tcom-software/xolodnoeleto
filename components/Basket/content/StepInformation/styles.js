import styled, { css } from "styled-components";
import theme from "styles/theme";

const StepInformationContainer = styled.div`
  & > div {
    min-height: 50px;
    padding: 15px;
    margin: 10px 0;
    display: flex;
    cursor: pointer;
    background: #fff;
    align-items: center;
    box-sizing: border-box;
    justify-content: flex-start;
    border: 1px solid ${theme.body.someBorder};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

    &:first-of-type {
      margin-top: 0;
    }
  }
  & > div > div {
    & > table {
      width: 100%;
      background: #fff;
      border-spacing: 25px 10px;

      & > tbody {
        & > tr {
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
        }
      }
    }
    ${({ stepState }) =>
      stepState === 2 &&
      css`
        & > div {
          margin: 10px 0;
          border: 1px solid ${theme.body.someBorder};

          &:last-of-type {
            border: none;
          }
        }
      `}
  }

  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const ChildrenCon = styled.div`
  display: flex;
  align-items: flex-end !important;
  flex-direction: column;
  cursor: unset !important;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > form {
      width: 100%;

      & > div {
        & > div {
          margin-top: 15px;
          font-weight: ${theme.body.fontBolder};
        }
      }
    }
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    & > div:last-of-type {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > * {
        margin-top: 10px;
      }
    }
  }
`;

const Div = styled.div`
  ${({ current }) =>
    current &&
    css`
      background: #f6f6f6 !important;
    `}

  ${({ stepOneComeBack }) =>
    stepOneComeBack &&
    css`
      & > div {
        margin-left: 10px;
      }
    `}

  & > div {
    font-weight: ${theme.body.fontBolder};
  }
`;

export { StepInformationContainer, Div, ChildrenCon };
