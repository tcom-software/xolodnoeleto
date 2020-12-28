import React, { useState } from "react";
import theme from "styles/theme";
import { connect } from "react-redux";
import ContentSwitch from "./content/ContentSwitch";
import { GlobalSection, Image, SvgIcon } from "@famous";
import { Ul, Nav, UlsCon, Section, Copyright, FooterContainer } from "./styles";

const Footer = ({ menu, copyright, socialNetworks }) => {
  const [isOpen, setIsOpen] = useState("");
  const handleOpen = (title) => {
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
          {menu.map(({ items, sideItems, title }, i) => {
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
                  <ContentSwitch
                    title={title}
                    items={items}
                    sideItems={sideItems}
                  />
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
          {socialNetworks.map(({ title, items }, i) => {
            return (
              <div key={i}>
                <h2>{title}</h2>
                <div>
                  {items.map(({ img, link, width, height }, i) => {
                    return (
                      <Image
                        key={i}
                        simpleWeb={`/images/icons/${img}`}
                        webpWeb={""}
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
