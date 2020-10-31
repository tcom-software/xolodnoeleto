import styled from "styled-components";
import theme from "styles/theme";

const InstallationPhotoContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  .item {
    transition: all 0.4s ease-in;
    background: #fff;
    border: 1px solid ${theme.body.someBorder};

    .lazyload-wrapper {
      img {
        //width: 100%;
        //max-height: 130px;
        object-fit: cover;
      }
    }

    &:hover {
      transition: all 0.4s ease-in;
      transform: scale(1.07);
    }
  }
  @media (max-width: 768px) {
  }
`;

export { InstallationPhotoContainer };
