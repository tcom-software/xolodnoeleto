import styled from "styled-components";

const NotificationContainer = styled.div`
  div {
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 360px;
    height: 50px;
    padding: 15px;
    border: 1px solid
      ${({ type }) => (type === "success" ? "#0070f3;" : "#fbeb3c;")};
    color: ${({ type }) => (type === "success" ? "white" : "black")};
    background: ${({ type }) => (type === "success" ? "#0070f3;" : "#fbeb3c;")};
  }

  @media (max-width: 768px) {
    div {
      width: 90vw;
      left: 0;
      right: 0;
      margin: 0 auto;
      border: 1px solid #fff;
    }
  }
`;

export { NotificationContainer };
