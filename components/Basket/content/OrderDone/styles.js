import styled from "styled-components";
import theme from "styles/theme";

const OrderDoneContainer = styled.div`
  left: 345px;
  width: 750px;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  & > p {
    margin-top: 15px;
    white-space: pre-line;
  }
  & > button {
    margin: 10px auto;
    a {
      color: white;
    }
  }
  @media (max-width: ${theme.mobileMedia.size}) {
    width: 100%;
    border: none;

    & > p {
      // white-space: unset;
    }
    & > button {
      width: 100%;
    }
  }
`;

export { OrderDoneContainer };
