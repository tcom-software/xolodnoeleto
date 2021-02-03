import styled from "styled-components";
import theme from "styles/theme";

const BrandsProductsContainer = styled.div`
  .top-side {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 220px 1fr;
  }
  section > div > div {
    background: white;
  }
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
`;

export { BrandsProductsContainer };
