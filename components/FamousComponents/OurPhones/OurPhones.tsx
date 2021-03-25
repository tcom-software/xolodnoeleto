import React from "react";
import { Hgroup } from "./styles";

const OurPhones = ({ phones, showOurPhones, showOurPhonesAction }) => {
  return (
    <Hgroup
      show={showOurPhones}
      onClick={() => {
        if (!showOurPhones) {
          showOurPhonesAction();
          const { ym }: any = window;
          ym(44761834, "reachGoal", "PokazatNomer");
        }
      }}
    >
      {phones.map(({ first, second }, i) => (
        <h2 key={i}>
          {first}
          <span>{!showOurPhones ? "xx" : second}</span>
        </h2>
      ))}
    </Hgroup>
  );
};

export default OurPhones;
