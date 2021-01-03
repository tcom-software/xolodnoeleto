import styled from "styled-components";

const NotificationContainer = styled.div`
  div {
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 320px;
    height: 50px;
    color: white;
    padding: 15px;
    background: #0070f3;
    border: 1px solid #0070f3;
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
