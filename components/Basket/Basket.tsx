import { Container, Table, GridSection } from "./styles";
import { TitleNavigation, AboutOrder } from "./content";
import { GlobalSection } from "@atoms";
import theme from "styles/theme";
import ProductListView from "../ProductListView";

const Basket = ({ basketItems }) => {
  return (
    <Container>
      <TitleNavigation
        title="Оформление заказа"
        currentPage="Оформление Заказа"
      />
      <GlobalSection
        isMobile={true}
        isWeb={true}
        webBackground={theme.body.background}
      >
        <GridSection>
          <Table>
            <tbody>
              <tr>
                <th>Фото</th>
                <th>Название товара</th>
                <th>Цена /шт.</th>
                <th>Количество</th>
                <th>Итого</th>
                <th>Изменить</th>
                <th>Удалить</th>
              </tr>
              {Object.values(basketItems).map((item, id) => (
                <ProductListView key={id} item={item} edit={true} />
              ))}
            </tbody>
          </Table>
          <AboutOrder />
        </GridSection>
      </GlobalSection>
    </Container>
  );
};

export default Basket;
