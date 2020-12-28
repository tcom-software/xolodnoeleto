import styled from "styled-components";
import theme from "styles/theme";

const ContactUsContainer = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 10px);

  & > form {
    background: #fff;
    grid-column: 20 / -1;
    padding: 20px 30px 20px 70px;
    border: 1px solid ${theme.body.someBorder};

    .title {
      margin-bottom: 20px;
    }
    .inputs-container {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }
  .information {
    position: absolute;
    align-self: center;
    left: 0;
    z-index: 9;
    height: 90%;
    grid-column: 1 / 2;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    max-width: 276px;
    background: #ffd600;

    & > div {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      & > div {
        margin-left: 20px;
      }

      &:first-of-type {
        p {
          text-align: center;
          white-space: pre-wrap;
        }
      }
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    grid-template-columns: 1fr !important;

    .information,
    form {
      grid-column: auto;
      position: relative;
      border: none;
      padding: 0;
      .inputs-container {
        grid-template-columns: 1fr;

        .second {
          & > div {
            button {
              width: 100%;
              margin-top: 15px;
            }
          }
        }
      }
    }
    .information {
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
      padding: 20px;
      & > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        svg {
          margin: 20px;
        }
      }
    }
  }
`;

export { ContactUsContainer };
