import React from "react";
import { Container, Card, Title } from "./styles";
import { SvgIcon } from "@famous";

const CardsAboutUs = ({ aboutUsCards }) => {
  return (
    <Container>
      {aboutUsCards.map((e, i) => (
        <Card key={i}>
          <Title> {e.title} </Title>
          <SvgIcon type={e.type} width={e.width} height={e.height} />
        </Card>
      ))}
    </Container>
  );
};

export default CardsAboutUs;
