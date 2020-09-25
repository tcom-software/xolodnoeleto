import React from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;

  & > picture > img {
    @media (max-width: 900px) {
      width: 85vw;
      height: intrinsic;
    }
  }

  & > svg {
    position: absolute;
    cursor: pointer;
    top: 40%;
    right: 5%;

    @media (max-width: ${theme.mobileMedia.size}) {
      width: 2vw;
      height: 2vw;
    }
  }
`;

export { Container };
