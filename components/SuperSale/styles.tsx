import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  position: relative;

  & > div.lazyload-wrapper > picture > img {
    width: 100%;
  }
  & > button {
    position: absolute;
    bottom: 35px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;

    & > div.lazyload-wrapper > picture > img {
      width: 300px;
      height: 200px;
      margin: 20px 0;
    }
    & > button {
      position: unset;
      width: 95%;
    }
  }
`;

export { Container };
