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
    border: 1px solid ${theme.body.someBorder};

    .front-img {
      transition: all 1s ease;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .backend-img {
      transition: all 1s ease;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  .item:hover {
    .front-img {
      transition: all 1s ease;
      transform: translateY(-200px);
    }
    .backend-img {
      transition: all 1s ease;
      transform: translateY(-200px);
    }
  }

  @media (max-width: 768px) {
  }
`;

const Titleh3 = styled.h3`
  margin: 20px 0;
`;
export { OurClientsContainer, Titleh3 };
