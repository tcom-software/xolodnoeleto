import styled from "styled-components";

const CertificatesContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);

  .item {
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

    img {
      padding: 10px 20px;
      width: 100%;
    }
  }
`;

export { CertificatesContainer };
