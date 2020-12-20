import React from "react";
import { SvgIcon } from "@famous";

const Information = ({ phones }) => {
  return (
    <div className="information">
      <div>
        <SvgIcon
          type={"locationInCircle"}
          width={20}
          height={20}
          color={"transparent"}
        />
        <div>
          <p> {`ООО "ХОЛОДНОЕЛЕТО" \nг. Москва`} </p>
        </div>
      </div>
      <div>
        <SvgIcon
          type={"messageInCircle"}
          width={20}
          height={20}
          color={"transparent"}
        />
        <div>
          <p>zakaz@xolodnoeleto.ru</p>
          <p>zakup@xolodnoeleto.ru</p>
          <p>info@xolodnoeleto.ru</p>
          <p>support@xolodnoeleto.ru</p>
        </div>
      </div>
      <div>
        <SvgIcon type={"phone"} width={20} height={20} />
        <div>
          {phones.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Information;
