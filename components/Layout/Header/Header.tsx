import React from "react";
import Banner from "./Banner";
import Link from "next/link";
import {
  Ul,
  TopPanel,
  MainPanel,
  LogoCon,
  PhonesCon,
  SearchCon,
  SearchAndFavoriteCon,
} from "./styles";
import { Input, GlobalSection, SvgIcon, Image } from "@atoms";

const Header = ({ navigation, phones }) => {
  return (
    <header>
      <Banner />
      <GlobalSection background={true}>
        <TopPanel>
          <Ul>
            {navigation.map((item, i) => {
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
        <MainPanel>
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
    </header>
  );
};

export default Header;
