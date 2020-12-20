import styled from "styled-components";
import theme from "styles/theme";

const BrandsContainer = styled.div`
  .items {
    display: grid;
    grid-gap: 20px;
    justify-content: center;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));

    .item {
      transition: all 0.4s ease-in;
      transform: scale(1);

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      background: #fff;
      cursor: pointer;

      width: 100%;
      height: 170px;
      border: 1px solid ${theme.body.someBorder};
      .info {
        text-align: center;
      }
      & > .lazyload-wrapper {
        width: max-content;
        text-align: center;
        img {
          width: 85%;
        }
      }
    }
    .item:hover {
      transition: all 0.4s ease-in;
      transform: scale(1.07);
    }
  }
  .selected-letters {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(34px, 34px));
    height: 60px;

    .selected-letter {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 34px;
      color: white;
      background: ${theme.body.primaryColor};
    }
  }
  @media (max-width: 768px) {
  }
`;

export { BrandsContainer };
