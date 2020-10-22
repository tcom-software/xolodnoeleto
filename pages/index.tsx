import React from "react";
import Banner from "../components/Banner";
import SubScriptionEmail from "../components/SubScriptionEmail";
import SuperSale from "../components/SuperSale";
import { connect } from "react-redux";

import ProductGridView from "../components/ProductGridView";
import ProductList from "../components/ProductsList";
import Brands from "../components/Brands";
import LazyLoad from "react-lazyload";
import ShowMoreWrapper from "../components/ShowMoreWrapper";
import { GlobalSection } from "@atoms";
import theme from "styles/theme";

const Index = ({ newProducts }) => {
  return (
    <>
      <Banner />
      <ProductList title={"НОВЫЕ ПРОДУКТЫ"} mobileType={"scroll"}>
        {Object.values(newProducts).map(
          ({ id, src, title, price, vendorCode, selectedStarsCount }) => {
            return (
              <ProductGridView
                key={id}
                id={id}
                src={src}
                title={title}
                price={price}
                vendorCode={vendorCode}
                selectedStarsCount={selectedStarsCount}
              />
            );
          }
        )}
      </ProductList>

      <LazyLoad>
        <SuperSale />
      </LazyLoad>
      <LazyLoad>
        <Brands />
      </LazyLoad>
      <LazyLoad>
        <SubScriptionEmail />
      </LazyLoad>
      <LazyLoad>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          mobilePadding="25px 0"
          webPadding="50px 0 20px"
        >
          <ShowMoreWrapper
            text={`В зависимости от функций, которые выполняет кондиционер, и его мощности меняются размеры и стоимость кондиционера. Покупая кондиционер, обратите внимание, на какую квадратуру он рассчитан, чтобы не переплачивать. Ведь слишком мощный кондиционер будет переохлаждать помещение и потреблять больше электроэнергии. А, например, для спальни можно выбрать более бесшумную модель кондиционера.
              Сегодня очень популярны бытовые сплит-системы – кондиционеры, состоящие из внутреннего и наружного блоков. Для большего комфорта основные шумопроизводящие элементы кондиционера вынесены в наружный блок, который располагается за пределами охлаждаемого помещения. На нашем сайте можно найти большой ассортимент сплит-систем от бытовых до полупромышленных моделей.
              Сегодня очень популярны бытовые сплит-системы – кондиционеры, состоящие из внутреннего и наружного блоков. Для большего комфорта основные шумопроизводящие элементы кондиционера вынесены в наружный блок, который располагается за пределами охлаждаемого помещения. На нашем сайте можно найти большой ассортимент сплит-систем от бытовых до полупромышленных моделей.`}
            fromHeight={100}
            border={"none"}
          />
        </GlobalSection>
      </LazyLoad>
    </>
  );
};

const mapStateToProps = ({ products: { newProducts } }) => ({
  newProducts,
});
export default connect(mapStateToProps)(Index);
