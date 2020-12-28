import React from "react";
import { Hgroup } from "./styles";

// catalog

const OurPhones = ({ phones, showOurPhones, showOurPhonesAction }) => {
  return (
    <Hgroup show={showOurPhones} onClick={() => showOurPhonesAction()}>
      {phones.map(({ first, second }, i) => (
        <h2 key={i}>
          {first} <span>{!showOurPhones ? "xx" : second}</span>
        </h2>
      ))}
    </Hgroup>
  );
};

export default OurPhones;
