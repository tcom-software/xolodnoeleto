import React, { useState } from "react";
import { connect } from "react-redux";
import { Ul, Nav, UlsCon, Section, Copyright, FooterContainer } from "./styles";
import { SvgIcon } from "@famous";
import { GlobalSection, Image } from "@famous";
import theme from "styles/theme";

const Footer = ({ menu, copyright, socialNetworks }) => {
  const [isOpen, setIsOpen] = useState("");
  const handleOpen = (title: string) => {
    if (isOpen == title) {
      setIsOpen("");
    } else {
      setIsOpen(title);
    }
  };
  return (
    <FooterContainer>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobilePadding={"0"}
      >
        <Nav>
          {menu.map(({ items, sideItems, title }: any, i: number) => {
            return (
              <Ul key={i}>
                <li onClick={() => handleOpen(title)}>
                  <h2>{title}</h2>
                  <SvgIcon
                    type={title === isOpen ? `arrowDown` : `arrowRight`}
                    width={13}
                    height={13}
                  />
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
                        return <li key={index}>{value}</li>;
                      })}
                    </Ul>
                  ) : null}
                </UlsCon>
              </Ul>
            );
          })}
        </Nav>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={"#EFEFEF"}
        mobilePadding={"0"}
        webPadding={"0"}
      >
        <Section>
          {socialNetworks.map(({ title, items }: any, i: number) => {
            return (
              <div key={i}>
                <h2>{title}</h2>
                <div>
                  {items.map(({ img, link, width, height }: any, i: number) => {
                    return (
                      <Image
                        key={i}
                        simpleWeb={`/images/icons/${img}`}
                        simpleMobile={""}
                        webpWeb={""}
                        webpMobile={""}
                        width={width}
                        height={height}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Section>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobilePadding={"0"}
      >
        <Copyright>{copyright.title}</Copyright>
      </GlobalSection>
    </FooterContainer>
  );
};

const mapStateToProps = ({ general: { socialNetworks, copyright, menu } }) => ({
  socialNetworks,
  copyright,
  menu,
});
export default connect(mapStateToProps)(Footer);
