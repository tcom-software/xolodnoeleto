import styled from "styled-components";

const NotificationContainer = styled.div`
  div {
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 360px;
    height: 50px;
    padding: 15px;
    z-index: 999;
    // border: 1px solid
    //   ${({ type }) => (type === "success" ? "#0070f3;" : "#fad601")};
    border: none;
    color: ${({ type }) => (type === "success" ? "#fad601" : "#0070f3;")};
    background: ${({ type }) => (type === "success" ? "#0070f3;" : "#fad601")};
  }

  @media (max-width: 768px) {
    div {
      width: 90vw;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

export { NotificationContainer };
