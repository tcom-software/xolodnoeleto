import React, { useState } from "react";
import { ByFormContainer } from "./styles";
import { Button, FillFormItem } from "@famous";

const BasketBuyForm = ({
  changeOrderStep,
  stepState,
  basketBuyInputs,
  updateStepsResult,
  manipulationSelectedData,
}) => {
  const [errorState, setErrorState] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    deliveryAddress: "",
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
      updateStepsResult({ step: "stepTree", value: true });
      changeOrderStep(stepState + 1);
    }
  };

  return (
    <ByFormContainer>
      <form onSubmit={handleSubmit}>
        <div>
          {basketBuyInputs.map(({ name, type, label }, i) => (
            <div key={i}>
              <label htmlFor={name}> {label} </label>
              <FillFormItem
                forHtml={name}
                type={type}
                name={name}
                data={info}
                initialErrorState={!!~errorState.indexOf(name)}
                callback={handleChange(name)}
                textareaHeight={90}
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
          <Button
            type="primary"
            width="170px"
            height="47px"
            onClick={() => {
              const {
                email,
                name,
                surname,
                phone,
                commentByOrder,
                deliveryAddress,
              } = info;

              manipulationSelectedData({
                email,
                name: name,
                last_name: surname,
                phone_number: phone,
                comment: commentByOrder,
                delivery_address: deliveryAddress,
              });
            }}
          >
            ДАЛЕЕ
          </Button>
        </div>
      </form>
    </ByFormContainer>
  );
};

export default BasketBuyForm;
