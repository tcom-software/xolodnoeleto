import styled from "styled-components";
import theme from "styles/theme";

const SearchOptionsContainer = styled.div`
  position: relative;
  padding: 50px 25px 15px;
  height: 90vh;
  overflow: scroll !important;
  & > button {
    transition: 0.2s all ease-in;
    position: relative;
    padding: 5px 20px;
    width: 100%;
    margin: 5px 0;
    .selected-catalog-with-star {
      position: absolute;
      left: 2px;
      top: 6px;
      fill: ${theme.body.sunColor};
    }
  }

  button:hover {
    transition: 0.2s all ease-in;
    background: white;
    color: ${theme.body.primaryColor};
    outline: 1px solid ${theme.body.primaryColor};
  }

  .close-modal-search-option {
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 100%;
    padding: 8px 25px;
    background: #fff;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    width: 100%;
    height: 90vh !important;
  }
`;

export { SearchOptionsContainer };
