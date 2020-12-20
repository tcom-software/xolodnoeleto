import styled from "styled-components";

const ReviewContainer = styled.div`
  padding: 15px;
  margin: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  .avatar {
    img {
      width: 93px;
      padding: 8px;
      border-radius: 50%;
      border: 1px solid #08da08;
    }
  }
  .stars {
    margin-top: 15px;
  }
  .full-name {
    font-weight: 800;
    margin: 10px 0;
    font-size: 22px;
  }
  .description {
    font-size: 16px;
  }
`;

export { ReviewContainer };
