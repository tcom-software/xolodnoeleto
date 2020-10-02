import styled from "styled-components";

const ModalContainer = styled.div`
  width: 395px;
  height: auto;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  margin: 25px 40px;
  font-size: 18px;
  align-items: center;
  justify-content: center;

  & > svg {
    margin-left: 25px;
  }
`;
const Body = styled.div`
  margin: 25px 40px;
`;

export { ModalContainer, Title, Body };
