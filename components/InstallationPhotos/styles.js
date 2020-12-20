import styled from "styled-components";
import theme from "styles/theme";

const InstallationPhotoContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));

  .item {
    transition: all 0.4s ease-in;
    background: #fff;
    border: 1px solid ${theme.body.someBorder};
    width: 100%;
    .lazyload-wrapper {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    &:hover {
      transition: all 0.4s ease-in;
      transform: scale(1.07);
    }
  }
  @media (max-width: 768px) {
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
