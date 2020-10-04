import React from "react";
import { Container, Card, Title } from "./styles";
import SvgIcons from "../atoms/SvgIcon";

const CardsAboutUs = ({ aboutUsCards }) => {
  return (
    <Container>
      {aboutUsCards.map((e, i) => (
        <Card key={i}>
          <Title> {e.title} </Title>
          <SvgIcons type={e.type} width={e.width} height={e.height} />
        </Card>
      ))}
    </Container>
  );
};

export default CardsAboutUs;
