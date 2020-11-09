import styled from "styled-components";
import theme from "styles/theme";

const AboutUsContainer = styled.div`
  .img-container {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
  .text-container {
    text-align: center;
    margin: 50px 50px 10px;
    p {
      margin-top: 20px;
    }
  }
  @media (max-width: 768px) {
    .img-container {
      grid-template-columns: 1fr !important;
      img {
        width: 100%;
      }
    }
  }
`;

export { AboutUsContainer };
