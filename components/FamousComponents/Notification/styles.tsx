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
    width: 100vw;
  }
`;

export { NotificationContainer };
