import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    background: #fff;
    border: 1px solid #e5e5e5;
    width: 100%;
    height: 97px !important;

    p {
      line-height: 1;
      margin-left: 10px;
      white-space: break-spaces;
    }

    @media (max-width: 430px) {
      padding: 7px;
      text-align: center;
      flex-wrap: wrap-reverse;
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr 1fr;
  }
`;

export { Container };
