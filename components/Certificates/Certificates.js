import React from "react";
import theme from "styles/theme";
import { GlobalSection, Image } from "@famous";
import TitleNavigation from "../TitleNavigation";
import { CertificatesContainer } from "./styles";

const Certificates = ({ certificates, changeBigImage }) => {
  return (
    <>
      <TitleNavigation
        title="Наши Сертификаты"
        currentPage="Наши Сертификаты"
      />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        webPadding={"30px 0"}
      >
        <CertificatesContainer>
          {Array.from(Array(certificates).keys()).map((e, i) => {
            return (
              <div className={`item item${i + 1}`} key={i}>
                <Image
                  simpleWeb={`/images/certificates/simple/cert_${i + 1}.jpg`}
                  webpWeb={`/images/certificates/optimized/cert_${i + 1}.webp`}
                  callback={() =>
                    changeBigImage(
                      `/images/certificates/simple/cert_${i + 1}.jpg`
                    )
                  }
                />
              </div>
            );
          })}
        </CertificatesContainer>
      </GlobalSection>
    </>
  );
};

export default Certificates;
