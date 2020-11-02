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
          {firstPiece.map(({ name, type, label }: any, i: number) => {
            return (
              <div key={i} className={`item${i + 1}`}>
                <label htmlFor={name}> {label} </label>
                <FillFormItem
                  key={i}
                  type={type}
                  name={name}
                  data={info}
                  initialErrorState={!!~errorState.indexOf(name)}
                  callback={handleChange(name)}
                />
              </div>
            );
          })}
        </div>
        <div className="second">
          {secondPiece.map(({ name, type, label }: any, i: number) => {
            return (
              <div key={i}>
                <div>
                  <label htmlFor={name}> {label} </label>
                  <FillFormItem
                    key={i}
                    type={type}
                    name={name}
                    data={info}
                    textareaHeight={144}
                    initialErrorState={!!~errorState.indexOf(name)}
                    callback={handleChange(name)}
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
