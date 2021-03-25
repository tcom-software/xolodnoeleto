import React from "react";
import Link from "next/link";
import { Ul } from "../styles";
import { OurPhones } from "@famous";
import { connect } from "react-redux";

const ContentSwitch = ({ title, items, sideItems, phones }) => {
  switch (title) {
    case "Компания":
      return (
        <>
          <Ul>
            {items.map(({ title, url }, index) => {
              return (
                <li key={index}>
                  <Link href={url}>
                    <a>{title}</a>
                  </Link>
                </li>
              );
            })}
          </Ul>
          {sideItems != undefined ? (
            <Ul elseCase={true}>
              {sideItems.map(({ title: sideTitle, url: sideUrl }, index) => {
                return (
                  <li key={index}>
                    <Link href={sideUrl}>
                      <a>{sideTitle}</a>
                    </Link>
                  </li>
                );
              })}
            </Ul>
          ) : null}
        </>
      );
    case "Есть вопросы? Звоните!":
      return <OurPhones phones={phones} />;
      break;
    default:
      return (
        <>
          <Ul>
            {items.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </Ul>
          {sideItems != undefined ? (
            <Ul elseCase={true}>
              {sideItems.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </Ul>
          ) : null}
        </>
      );
  }
};

const mapStateToProps = ({ general: { phones } }) => ({
  phones,
});

export default connect(mapStateToProps)(ContentSwitch);
