import styled, { css } from "styled-components";
import theme from "styles/theme";

const CatalogContainer = styled.ul`
  position: absolute;
  top: 140%;
  left: 0;
  z-index: 2;
  background: #fff;
  display: none;
  width: max-content;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-top: 4px solid ${theme.body.primaryColor};

  .level-one-li {
    transition: all 0.2s ease-in;

    &:hover {
      transition: all 0.2s ease-in;
      background: #03a9f4;
      & > p {
        color: white;
      }
    }
    p {
      padding: 15px;
      display: block;
    }

    a {
      padding: 15px;
      display: block;
    }

    .level-two-ul {
      position: absolute;
      top: 0px;
      display: none;
      border-left: 5px solid transparent;

      .level-two-li {
        width: 100%;
        background: #fff;

        &:hover {
          transition: all 0.2s ease-in;
          background: #03a9f4;
          & > a,
          & > p {
            color: white;
          }
        }
      }

      .level-three-ul {
        position: absolute;
        top: 0;
        left: 100%;
        display: none;
        border-left: 5px solid transparent;

        li {
          background: #fff;
          a {
            color: #03a9f4;
          }
        }
        li:hover {
          background: #03a9f4;
          a {
            color: white;
          }
        }
      }
    }
  }

  svg {
    transition: all 1s ease-in;
    position: absolute;
    top: -16px;
    left: 70px;
  }

  ${({ modalType }) => {
    return (
      modalType === "catalog" &&
      css`
        display: flex;
        flex-direction: column;
        .level-one-li:hover > .level-two-ul {
          display: block;
          left: 100%;
          min-width: 100%;
          min-height: 100%;
          height: max-content;

          .level-two-li:hover {
            .level-three-ul {
              display: block;
              width: max-content;
              left: 100%;
              height: 100%;
            }
          }
        }
      `
    );
  }}

  @media (max-width: ${theme.mobileMedia.size}) {
    transition: border-top 0.3s 0.3s ease-in, max-height 0.3s ease-in;
    position: absolute;
    top: 140%;
    background: #fff;
    width: 100vw;
    left: -8px;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    border-top: 0px solid ${theme.body.primaryColor};
    border-top: 0 solid ${theme.body.primaryColor};

    .level-one-li {
      .level-two-ul {
        position: unset;
        border: none;
        width: 100%;
        border-bottom: 1px solid ${theme.body.someBorder};
        .level-two-li {
          width: 100% !important;
          & > a {
            padding: 15px 30px;
          }
          .level-three-ul {
            position: unset;
            border: none;
            border-bottom: 1px solid ${theme.body.someBorder};
            width: 100% !important;

            .level-three-li {
              & > a {
                padding: 15px 60px;
              }
            }
          }
        }
      }
    }

    & > li {
      width: 100%;
      a {
        padding: 15px;
        display: block;
      }
    }
    svg {
      display: none;
    }

    ${({ modalType }) => {
      return (
        modalType === "catalog" &&
        css`
          transition: 0.3s border-top ease-in, max-height 0.4s 0.3s ease-in;
          border-top: 4px solid ${theme.body.primaryColor};
          max-height: 3000px;
        `
      );
    }}
  }
`;

export { CatalogContainer };
