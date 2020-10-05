import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.section`
  width: 81%;
  height: 70%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    width: 98%;
    height: auto;
    grid-template-columns: 1fr;

    & > form {
      order: 2;
    }
    & > div {
      order: 1;
    }
  }
`;

const Form = styled.form`
  padding: 15px 20px;
  border: 1px solid ${theme.body.someBorder};
  background: ${theme.body.background};

  & > button {
    width: 100%;
  }
  & > div {
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    padding: 15px 0;
    background: ${theme.body.secondBackground};
  }
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: ${theme.body.fontBolder};
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;
const ImgContainer = styled.div`
  position: relative;

  & > picture {
    &:first-of-type > img {
      position: absolute;
      left: 0;
      bottom: -184px;
      width: 290px;
      height: 430px;
      z-index: 2;
    }
    &:last-of-type > img {
      position: absolute;
      right: 23px;
      bottom: -100px;
      width: 388px;
      height: 190px;
      z-index: 1;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    & > picture {
      &:first-of-type > img {
        display: none;
      }
      &:last-of-type > img {
        margin: 25px 0 15px;
        position: unset;
        width: 90%;
        height: auto;
      }
    }
  }
`;

export { Container, Form, Label, ImgContainer };
