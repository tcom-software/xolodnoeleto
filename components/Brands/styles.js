import styled from "styled-components";
import theme from "styles/theme";

const BrandsContainer = styled.div`
  .items {
    display: grid;
    grid-gap: 7px;
    align-items: center;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));

    .item {
      transition: all 0.4s ease-in;
      transform: scale(1);
      width: 170px;
      height: 170px;
      cursor: pointer;
      background: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      border: 1px solid ${theme.body.someBorder};

      .info {
        text-align: center;
      }
      & > .lazyload-wrapper {
        width: max-content;
        text-align: center;
        img {
          width: 100px;
        }
      }
    }

    //.item:hover {
    //  transition: all 0.4s ease-in;
    //  transform: scale(1.07);
    //}
  }
  .selected-letters {
    display: grid;
    grid-gap: 10px;
    margin: 10px 0;
    grid-template-columns: repeat(auto-fill, minmax(34px, 34px));
    height: max-content;

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
`;

export { BrandsContainer };
