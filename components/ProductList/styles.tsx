import styled, { css } from "styled-components";

const Container = styled.section``;

const ListContainer = styled.div`
  margin-top: 27px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));

  @media (max-width: 768px) {
    ${({ mobileType }) => {
      if (mobileType === "scroll") {
        return css`
          display: grid;
          grid-gap: 20px;
          overflow: scroll;
          grid-template-columns: repeat(10, 228px);
        `;
      }
    }}
  }
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 800;
`;

export { Container, Title, ListContainer };
