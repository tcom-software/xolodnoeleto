import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  
  & > svg {
    position: absolute;
    cursor: pointer;
    top: 32px;
    right: 33px;
  }
`

export {
    Container
}