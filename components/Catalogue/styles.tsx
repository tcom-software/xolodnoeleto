import styled from "styled-components";

const CatalogueContainer = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export { CatalogueContainer };
