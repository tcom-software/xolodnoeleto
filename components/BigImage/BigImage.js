import { BigImageContainer } from "./styles";
import { GlobalSection } from "@famous";

const BigImage = ({ isOpenBigImg, changeBigImage }) => {
  if (isOpenBigImg !== "") {
    return (
      <BigImageContainer onClick={(e) => changeBigImage("")}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={"transparent"}
        >
          <div className="content">
            <img src={isOpenBigImg} alt="Ac ХолодноеЛето" />
          </div>
        </GlobalSection>
      </BigImageContainer>
    );
  } else {
    return null;
  }
};
export default BigImage;
