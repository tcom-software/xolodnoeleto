import React from "react";
import Data from "./data";
import { Ul, Nav, UlsCon, Section, Copyright } from "./styles";

const Footer = () => {
  return (
    <footer>
      <Nav>
        {Data.menu.map(({ items, sideItems, title }: any, i: number) => {
          return (
            <Ul key={i}>
              <li>
                <h2>{title}</h2>
              </li>
              <UlsCon>
                <Ul>
                  {items.map((value: any, index: number) => {
                    return <li key={index}>{value}</li>;
                  })}
                </Ul>
                {sideItems != undefined ? (
                  <Ul elseCase={true}>
                    {sideItems.map((value: any, index: number) => {
                      console.log(value);
                      return <li key={index}>{value}</li>;
                    })}
                  </Ul>
                ) : null}
              </UlsCon>
            </Ul>
          );
        })}
      </Nav>

      <Section>
        {Data.socialNetworks.map(({ title, items }: object, i: number) => (
          <div key={i}>
            <h2>{title}</h2>
            {items.map((path: string, i: number) => (
              <img src={`/images/icons/${path}`} key={i} alt="" />
            ))}
          </div>
        ))}
      </Section>
      <Copyright>{Data.Copyright.title}</Copyright>
    </footer>
  );
};

export default Footer;
