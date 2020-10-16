import React from "react";
import styled from "styled-components";
import { SvgIcon } from "@atoms";
import { IncDecInterface } from "interfaces";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 0px 5px;
  }
`;
const SvgBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: #f6f6f6;
  padding: 4px 6px 2px;
`;
const Count = styled.div``;

const IncDec = ({ id, count, increment, decrement }) => {
  return (
    <Container>
      <SvgBack onClick={() => decrement(id)}>
        <SvgIcon type="minus" width={11} height={11} />
      </SvgBack>
      <Count>{count}</Count>
      <SvgBack onClick={() => increment(id)}>
        <SvgIcon type="plus" width={11} height={11} />
      </SvgBack>
    </Container>
  );
};

export default IncDec;
