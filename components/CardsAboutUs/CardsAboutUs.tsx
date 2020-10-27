import React from "react";
import { SvgIcon } from "@famous";
import { Container } from "./styles";

const CardsAboutUs = ({ aboutUsCards }) => {
  return (
    <Container>
      {aboutUsCards.map((e, i) => (
        <div className="card" key={i}>
          <p> {e.title} </p>
          <SvgIcon type={e.type} width={e.width} height={e.height} />
        </div>
      ))}
    </Container>
  );
};

export default CardsAboutUs;
