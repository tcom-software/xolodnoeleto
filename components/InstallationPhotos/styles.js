import styled from "styled-components";
import theme from "styles/theme";

const InstallationPhotoContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));

  .item {
    width: 100%;
    cursor: pointer;
    background: #fff;
    padding: 7px 15px;
    transition: all 0.4s ease-in;
    border: 1px solid ${theme.body.someBorder};
    .lazyload-wrapper {
      width: 100%;
      img {
        width: 100%;
        object-fit: contain;
        height: 200px;
      }
    }

    &:hover {
      transition: all 0.4s ease-in;
      transform: scale(1.07);
    }
  }
  @media (max-width: ${theme.mobileMedia.size}) {
    grid-gap: 15px;
    .item {
      .lazyload-wrapper {
        img {
          object-fit: cover;
        }
      }
    }
  }
`;

export { InstallationPhotoContainer };
