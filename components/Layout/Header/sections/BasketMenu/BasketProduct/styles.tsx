import styled from "styled-components";
import theme from "../../../../../../styles/theme";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 66px;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #d8d8d8;
`;
const ImgContainer = styled.div``;
const Title = styled.h3``;
const Price = styled.div`
  font-weight: ${theme.body.fontBolder};
`;
const Image = styled.img`
  width: 57px;
  height: 57px;
`;

export { Item, ImgContainer, Title, Image, Price };
