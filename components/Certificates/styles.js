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
  .item1 {
    grid-column: 1 / 3;
  }
  .item6 {
    grid-column: 3 / 5;
  }
  .item7 {
    grid-column: 1 / 3;
  }
  .item12 {
    grid-column: 3 / 5;
  }
  .item13 {
    grid-column: 1 / 3;
  }

  @media (max-width: 768px) {
    .item1 {
      grid-column: 1 / 5;
    }
    .item2,
    .item4 {
      grid-column: 1 / 3;
    }
    .item3,
    .item5 {
      grid-column: 3 / 5;
    }
    .item6 {
      grid-column: 1 / 5;
    }
    .item7 {
      grid-column: 1 / 5;
    }

    .item8,
    .item10 {
      grid-column: 1 / 3;
    }
    .item9,
    .item11 {
      grid-column: 3 / 5;
    }

    .item12 {
      grid-column: 1 / 5;
    }
    .item13 {
      grid-column: 1 / 5;
    }
    .item14 {
      grid-column: 1 / 3;
    }
  }
`;

export { CertificatesContainer };
