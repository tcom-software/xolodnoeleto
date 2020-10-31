import styled from "styled-components";
import theme from "styles/theme";

const OurClientsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  .item {
    height: 200px;
    background: #fff;
    overflow: hidden;

    .front-img {
      transition: all 0.5s ease;

      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .backend-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  .item:hover {
    .front-img {
      transition: all 0.5s ease;
      margin-top: -200px;
    }
    .backend-img {
    }
  }

  @media (max-width: 768px) {
  }
`;

export { OurClientsContainer };
