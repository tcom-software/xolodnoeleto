import styled from "styled-components";
import theme from "styles/theme";

const CatalogueContainer = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 220px 1fr;

  .catalogue {
    .title-section {
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 13.5px 15px;
      margin-bottom: 11px;
      border: 1px solid ${theme.body.someBorder};
      .sort-by {
        padding: 10px;
        cursor: pointer;
        border: 1px solid ${theme.body.someBorder};

        select {
        }
      }
    }
    h1 {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 15px;
    }
    .products {
      display: grid;
      grid-gap: 22px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      & > div {
        background: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    grid-gap: 5px;
    grid-template-columns: 1fr;
    .catalogue {
      .products {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      }
    }
  }
`;

export { CatalogueContainer };
