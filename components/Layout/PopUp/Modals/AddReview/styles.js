import styled from "styled-components";
import theme from "styles/theme";

const ModalContainer = styled.div`
  width: 490px;
  height: auto;
  margin: 0 auto;
  @media (max-width: ${theme.mobileMedia.size}) {
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

  input,
  textarea,
  button,
  .upload-image-container {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  }
  .rating-container {
    p {
      text-align: center;
      color: #c4c4c4;
      margin-top: 15px;
    }
    p.error {
      color: ${theme.error.color};
    }
    .rating {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      .active {
        border: 1px solid #ffd600;
        background: #ffd600;
      }
      span {
        cursor: pointer;
        padding: 2px 19px;
        color: #b1aeae;
        border: 1px solid #b1aeae;
        box-sizing: border-box;
        border-radius: 30px;

        &:hover {
          border: 1px solid #ffd600;
          background: #ffd600;
        }
      }
    }
  }
`;

export { ModalContainer, Title, Body };
