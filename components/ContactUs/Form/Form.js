import { Button, FillFormItem } from "@famous";
import React from "react";

const Form = ({
  handleSubmit,
  info,
  errorState,
  handleChange,
  firstPiece,
  secondPiece,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="title">
        <h2>ОБРАТНАЯ СВЯЗЬ</h2>
      </div>
      <div className="inputs-container">
        <div className="first">
          {firstPiece.map(({ name, type, label, required }, i) => {
            return (
              <div key={i} className={`item${i + 1}`}>
                <label htmlFor={name}> {label} </label>
                <FillFormItem
                  key={i}
                  type={type}
                  name={name}
                  data={info}
                  required={required}
                  callback={handleChange(name)}
                  initialErrorState={!!~errorState.indexOf(name)}
                />
              </div>
            );
          })}
        </div>
        <div className="second">
          {secondPiece.map(({ name, type, label, required }, i) => {
            return (
              <div key={i}>
                <div>
                  <label htmlFor={name}> {label} </label>
                  <FillFormItem
                    key={i}
                    type={type}
                    name={name}
                    data={info}
                    required={required}
                    textareaHeight={144}
                    callback={handleChange(name)}
                    initialErrorState={!!~errorState.indexOf(name)}
                  />
                </div>
                <Button type="primary" width="165px" height="47px">
                  ОТПРАВИТЬ
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default Form;
