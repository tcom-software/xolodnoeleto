import styled from "styled-components";
import theme from "styles/theme";

const ReviewContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;

  .review-item {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 2fr 3fr;
    padding: 20px;
    background: #fff;
    border: 1px solid #d8d8d8;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

    .info {
      .name {
        h2 {
          font-size: 18px;
        }
        text-align: center;
        margin-bottom: 10px;
      }
      .avatar {
        text-align: center;
      }
    }
    .uploaded-images {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

      img {
        width: 100%;
        height: 150px;
        object-fit: contain;
        border: 1px solid #d8d8d8;
        padding: 15px;
        cursor: pointer;
        &:hover {
          transform: scale(1.07);
        }
      }
    }
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    .review-item {
      grid-template-columns: 1fr;
      .uploaded-images {
        margin-top: 15px;
      }
    }
  }
`;

export { ReviewContainer };
