import styled from "styled-components";
import theme from "styles/theme";

const TitleNavigationContainer = styled.div`
  .nav {
    font-weight: 400;
    & > span {
      font-weight: 400;
      color: #a2a2a2cc;
    }

    @media (max-width: ${theme.mobileMedia.size}) {
      display: none;
    }
  }
  .title {
    font-size: 24px;
    margin-top: 10px;
    font-weight: ${theme.body.fontBolder};

    @media (max-width: ${theme.mobileMedia.size}) {
      margin: 0;
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

export { TitleNavigationContainer };
