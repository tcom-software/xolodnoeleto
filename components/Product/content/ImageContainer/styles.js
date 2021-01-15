import styled from "styled-components";
import theme from "styles/theme";

const ProductImageContainer = styled.div`
  .nav-title {
    margin: 15px 0;
  }
  .mobile-container {
    display: none;
  }
  .images-container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 120px 4fr;

    .small-images {
      display: grid;
      grid-gap: 10px;
      align-content: baseline;
      grid-template-columns: repeat(auto-fit, 120px);

      img {
        transition: all 0.3s ease-in;
        width: 100%;
        min-width: 100%;
        min-height: 100px;
        max-height: 120px;
        border: 1px solid ${theme.body.someBorder};
        cursor: pointer;
        object-fit: contain;

        &:hover {
          transition: all 0.3s ease-in;
          transform: scale(1.02);
        }
      }
      .selected {
        border: 1px solid ${theme.body.primaryColor};
      }
    }
    .main-img {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 450px;
      border: 1px solid ${theme.body.someBorder};

      img {
        max-width: 460px;
      }

      & > div {
        width: 100%;
        img {
          width: 100%;
          max-width: 460px;
        }
      }
      .super-price {
        position: absolute;
        top: 15px;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 97px;
        height: 23px;
        color: white;
        font-size: 11px;
        font-weight: 800;
        background: #ea4a4a;
      }
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    .nav-title {
      display: none;
    }
    .images-container {
      grid-gap: 5px;
      grid-template-columns: 1fr;

      .small-images {
        order: 2;
        display: grid;
        justify-content: flex-start;
        grid-template-columns: repeat(auto-fit, minMax(100px, 1fr));

        img {
          max-width: 100px;
          height: 100px;
        }
        & > div {
          margin-left: 10px;
          &:first-of-type {
            margin-left: 0px;
          }
        }
      }
      .main-img {
        min-height: 300px;
      }
    }

    .mobile-container {
      display: flex;
      align-content: center;
      justify-content: space-between;
      margin: 10px 0;
    }
  }
`;

export { ProductImageContainer };
