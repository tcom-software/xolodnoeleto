import { Container, Table, GridSection, Tr } from "./styles";
import { TitleNavigation, Products, AboutOrder } from "./content";
import { GlobalSection } from "@atoms";
import theme from "styles/theme";
import SvgIcons from "../atoms/SvgIcon";
import { IncDec, makePrice } from "../../utils";

const Basket = ({
  stepState,
  basketItems,
  increment,
  decrement,
  deleteBasketItem,
}) => {
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
              {Object.values(basketItems).map(
                ({ id, src, manufacturer, model, price, count }) => {
                  return (
                    <Tr key={id}>
                      <td>
                        <img src={src} width={57} height={57} />
                      </td>
                      <td>
                        <div>
                          <p>{manufacturer}</p>
                          <p>{model}</p>
                        </div>
                      </td>
                      <td>{makePrice(price)}</td>
                      <td>
                        {IncDec({
                          id,
                          count,
                          increment,
                          decrement,
                        })}
                      </td>
                      <td>{makePrice(price * count)}</td>
                      <td>
                        <SvgIcons type="edit" width={15} height={15} />
                      </td>
                      <td>
                        <SvgIcons
                          type="close"
                          width={15}
                          height={15}
                          callback={() => deleteBasketItem(id)}
                        />
                      </td>
                    </Tr>
                  );
                }
              )}
            </tbody>
          </Table>
          <AboutOrder />
        </GridSection>
      </GlobalSection>
    </Container>
  );
};

export default Basket;
