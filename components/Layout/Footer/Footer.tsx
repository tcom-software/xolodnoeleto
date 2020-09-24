import React, { useState } from "react";
import Data from "./data";
import { Ul, Nav, UlsCon, Section, Copyright } from "./styles";
import SvgIcons from "../../atoms/SvgIcon";

const Footer = () => {
  const [isOpen, setIsOpen] = useState("");
  const handleOpen = (title: string) => {
    if (isOpen == title) {
      setIsOpen("");
    } else {
      setIsOpen(title);
    }
  };
  return (
    <footer>
      <Nav>
        {Data.menu.map(({ items, sideItems, title }: any, i: number) => {
          return (
            <Ul key={i}>
              <li onClick={() => handleOpen(title)}>
                <h2>{title}</h2>
                <SvgIcons type="arrowRight" width={13} height={13} />
              </li>
              <UlsCon title={title} isOpen={isOpen}>
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
        {Data.socialNetworks.map(({ title, items }: any, i: number) => (
          <div key={i}>
            <h2>{title}</h2>
            <div>
              {items.map((path: string, i: number) => (
                <img src={`/images/icons/${path}`} key={i} alt="" />
              ))}
            </div>
          </div>
        ))}
      </Section>
      <Copyright>{Data.Copyright.title}</Copyright>
    </footer>
  );
};

export default Footer;
