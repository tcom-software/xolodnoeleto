import styled, { css } from "styled-components";
import theme from "styles/theme";

const OurClientsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media (max-width: 768px) {
  }
`;
const Item = styled.div`
  background: #fff;
  overflow: hidden;
  height: 230px;
  border: 1px solid ${theme.body.someBorder};

  .front-con,
  .backend-con {
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 230px;
  }

  .front-con {
    .front-img {
      transition: all 1s ease;
      width: 80%;
      ${({ exception }) => {
        return (
          exception &&
          css`
            padding: 15px;
            background: orange;
          `
        );
      }}
    }
  }
  .backend-con {
    .backend-img {
      transition: all 1s ease;
      width: 80%;
    }
  }

  &:hover {
    .front-con,
    .backend-con {
      transition: all 0.5s ease;
      transform: translateY(-100%);
      ${({ srcTwo }) => {
        if (!srcTwo) {
          return css`
            transform: translateY(0%);
          `;
        }
      }}
    }
  }
`;
const Titleh3 = styled.h3`
  margin: 20px 0;
`;
export { OurClientsContainer, Titleh3, Item };
