import styled from "styled-components";
import theme from "styles/theme";

const LettersContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(34px, 34px));
  margin-bottom: 10px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 34px;
    color: ${theme.body.primaryColor};
    border: 1px solid ${theme.body.primaryColor};
  }
  .selected {
    height: 34px;
    color: #fff;
    background: ${theme.body.primaryColor};
  }
`;

export { LettersContainer };
