import styled from "styled-components";
import theme from "styles/theme";

const Item = styled.div``;
const ImgContainer = styled.div``;
const Title = styled.h3`
  padding-left: 10px;
  border-left: 1px solid #d7d7d7;
`;
const Price = styled.div`
  font-weight: ${theme.body.fontBolder};
`;
const Image = styled.img`
  width: 57px;
  height: 57px;
`;

export { Item, ImgContainer, Title, Image, Price };
