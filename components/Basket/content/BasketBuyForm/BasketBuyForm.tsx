import React, { useState } from "react";
import { ByFormContainer } from "./styles";
// @ts-ignore
import { Button, FillFormItem } from "@famous";

const BasketBuyForm = ({
  changeOrderStep,
  stepState,
  basketBuyInputs,
  updateStepsResult,
}) => {
  const [errorState, setErrorState] = useState([]);
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressDelivery: "",
    commentByOrder: "",
  });

  const handleChange = (name) => (value) => setInfo({ ...info, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const basketBuyInputs = Object.entries(info)
      .map((e) => (e[1] == "" ? e[0] : null))
      .filter((e) => e !== null);

    if (basketBuyInputs.length > 0) {
      setErrorState(basketBuyInputs);
    } else {
      updateStepsResult({ step: "stepTree", value: info });
      changeOrderStep(stepState + 1);
    }
  };

  return (
    <ByFormContainer>
      <form onSubmit={handleSubmit}>
        <div>
          {basketBuyInputs.map(({ name, type, label }: any, i: number) => (
            <div key={i}>
              <label htmlFor={name}> {label} </label>
              <FillFormItem
                forHtml={name}
                type={type}
                name={name}
                data={info}
                initialErrorState={!!~errorState.indexOf(name)}
                callback={handleChange(name)}
              />
            </div>
          ))}
        </div>
        <div>
          <Button
            type="secondary"
            width="170px"
            height="47px"
            onClick={() => {
              updateStepsResult({ step: "stepTwo", value: false });
              changeOrderStep(stepState - 1);
            }}
          >
            НАЗАД
          </Button>
          <Button type="primary" width="170px" height="47px">
            ДАЛЕЕ
          </Button>
        </div>
      </form>
    </ByFormContainer>
  );
};

export default BasketBuyForm;
