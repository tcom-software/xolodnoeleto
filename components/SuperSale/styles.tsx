import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.section`
  width: 80%;
  margin: 0 auto;

  & > picture > img {
    width: 100%;
  }

  @media (max-width: 768px) {
  }
`;

export { Container };
