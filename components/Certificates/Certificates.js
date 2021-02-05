import React from "react";
import theme from "styles/theme";
import { GlobalSection, Image } from "@famous";
import TitleNavigation from "../TitleNavigation";
import { CertificatesContainer } from "./styles";
import { Loading } from "../FamousComponents";
import getConfig from "next/config";

const Certificates = ({ certificates, changeBigImage }) => {
  if (certificates === null) {
    return <Loading />;
  }
  const {
    publicRuntimeConfig: { serverUrl, certificateUpload },
  } = getConfig();
  //      ,Габарити
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
          {certificates.map(({ file_name, id, name }, i) => {
            const index = [
              10,
              11,
              14,
              21,
              26,
              27,
              30,
              35,
              39,
              50,
              67,
              106,
              132,
              133,
              135,
            ].includes(id);
            if (!index) {
              return (
                <div className="item" key={id} data-id={id}>
                  <Image
                    simpleWeb={`${serverUrl}/${certificateUpload}/size300/${file_name}`}
                    alt={name}
                    webpWeb={``}
                    callback={() =>
                      changeBigImage(
                        `${serverUrl}/${certificateUpload}/original/${file_name}`
                      )
                    }
                  />
                </div>
              );
            }
          })}
        </CertificatesContainer>
      </GlobalSection>
    </>
  );
};

export default Certificates;
