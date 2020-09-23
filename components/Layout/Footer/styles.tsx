import styled, { css } from "styled-components";

const Ul = styled.ul`
  list-style: none;

  & > li > h2 {
    margin-bottom: 15px;
  }
`;
const Nav = styled.nav`
  display: grid;
  align-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(auto-fill, auto);

  width: 60vw;
  margin: 20px auto;

  & > ul {
    width: max-content;

    &:nth-child(2) {
      width: 80%;
      justify-self: center;
    }
  }
`;
const UlsCon = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  background: #efefef;

  & > div {
    display: flex;
    align-items: center;

    img {
      margin: 0px 15px;
    }
    h3 {
      margin-right: 25px;
    }
  }
`;

const Copyright = styled.div`
  color: #565656;
  padding: 10px;
  text-align: center;
`;

export { Ul, Nav, UlsCon, Section, Copyright };
