import styled from "styled-components";

const PaymentAndDeliveryContainer = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: 1fr;
  .first-con,
  .second-con,
  .third-con {
    grid-gap: 50px;
    img {
      width: 100%;
    }
    .texts {
      flex-direction: column;
      display: flex;
      justify-content: center;
      h2 {
        font-size: 16px;
        margin-bottom: 20px;
      }
      p {
        font-size: 14px;
        white-space: pre-wrap;
        color: #5b5b5b;
      }
    }
  }

  .first-con {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
  .second-con {
    display: grid;
    grid-template-columns: 3fr 2fr;
  }
  @media (max-width: 768px) {
    grid-gap: 20px;

    .first-con {
      display: grid;
      grid-template-columns: 1fr;
    }
    .second-con {
      display: grid;
      grid-template-columns: 2fr;
    }
    .first-con,
    .second-con,
    .third-con {
      grid-gap: 25px;
    }
  }
`;

export { PaymentAndDeliveryContainer };
