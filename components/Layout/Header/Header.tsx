import React, { useState } from "react";
import Banner from "./Banner";
import Link from "next/link";
import {
  Ul,
  Span,
  TopPanel,
  CatalogUl,
  MainPanel,
  LogoCon,
  PhonesCon,
  SearchCon,
  BottomPanel,
  SearchAndFavoriteCon,
} from "./styles";
import { Input, GlobalSection, SvgIcon, Button } from "@atoms";
import theme from "../../../styles/theme";

const Header = ({ navigation, elseRefs, phones, catalog }) => {
  const [headerMenu, setHeaderMenu] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <header>
      <Banner />
      <GlobalSection background={true}>
        <TopPanel>
          <SvgIcon type="phone" width={23} height={23} />
          <LogoCon isMobile={true}>
            <Link href={""}>
              <>
                <img src="/images/logo/logo.png" alt="sun" />
                <h1>XOLODNOELETO</h1>
              </>
            </Link>
          </LogoCon>
          <SvgIcon
            type="hamburgerMenu"
            width={25}
            height={25}
            callback={() => {
              if (headerMenu == "navigation") {
                setHeaderMenu("");
              } else {
                setHeaderMenu("navigation");
              }
            }}
          />
        </TopPanel>
        <TopPanel whatMenu={headerMenu} onlyMenu={true}>
          <Ul>
            {[...elseRefs, ...navigation].map((item, i) => {
              return (
                <li key={i}>
                  <Link href={""}>{item}</Link>
                </li>
              );
            })}
          </Ul>
        </TopPanel>
      </GlobalSection>
      <GlobalSection>
        <MainPanel isMobileHidden={true}>
          <LogoCon>
            <Link href={""}>
              <>
                <img src="/images/logo/logo.png" alt="sun" />
                <h1>XOLODNOELETO</h1>
              </>
            </Link>
          </LogoCon>
          <PhonesCon>
            <hgroup>
              {phones.map((e, i) => (
                <h2 key={i}>{e}</h2>
              ))}
            </hgroup>
            <p>Заказать обратный звонок</p>
          </PhonesCon>
          <SearchCon>
            <Input
              search={true}
              placeholder={"search"}
              svgSize={16}
              width={350}
              height={35}
            />
          </SearchCon>
          <SearchAndFavoriteCon customMargin={true}>
            <SvgIcon type={"compare"} width={20} height={13} />
            Сравнить
          </SearchAndFavoriteCon>
          <SearchAndFavoriteCon>
            <SvgIcon type={"favorite"} width={19.5} height={25} />
            Избранные
          </SearchAndFavoriteCon>
        </MainPanel>
      </GlobalSection>
      <GlobalSection>
        <BottomPanel whatMenu={headerMenu}>
          <Ul>
            <li
              onClick={() => {
                if (headerMenu == "catalog") {
                  setHeaderMenu("");
                } else {
                  setHeaderMenu("catalog");
                }
              }}
            >
              <SvgIcon
                type="hamburgerMenu"
                width={25}
                height={25}
                color={
                  headerMenu === "catalog" ? theme.body.primaryColor : "#000"
                }
                callback={() => {}}
              />
              Каталог товаров
              <CatalogUl whatMenu={headerMenu}>
                {catalog.map((e, i) => {
                  return (
                    <li key={i}>
                      <Link href="">{e}</Link>
                    </li>
                  );
                })}
                <SvgIcon
                  type="box"
                  width={15}
                  height={15}
                  color={theme.body.primaryColor}
                  callback={() => {}}
                />
              </CatalogUl>
            </li>
            <li>% Акции</li>
            <li>Бренды</li>
            <li>
              <SearchCon mobileDisableView={true} isOpenSearch={isOpenSearch}>
                <Input
                  search={true}
                  svgSize={20}
                  width={350}
                  height={35}
                  placeholder={"search"}
                  callback={() => setIsOpenSearch(!isOpenSearch)}
                />

                <Span />
                <Span />
                <Span />
                <Span />
                <Span />
                <Span />
              </SearchCon>
            </li>
            <li>
              <SvgIcon type="basket" width={20} height={20} />
            </li>
            <li>
              <Button type="with-icon" width={190} height={47}>
                <SvgIcon type="basket" width={20} height={20} />
                Корзина пуста
              </Button>
            </li>
            <li>
              <SvgIcon
                type="close"
                width={20}
                height={20}
                callback={() => {
                  setHeaderMenu("");
                }}
              />
            </li>
          </Ul>
        </BottomPanel>
      </GlobalSection>
    </header>
  );
};

export default Header;
