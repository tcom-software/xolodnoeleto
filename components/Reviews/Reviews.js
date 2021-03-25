import React, { useEffect } from "react";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import { ReviewContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";
import getConfig from "next/config";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
import { DataEmpty } from "../FamousComponents";

const {
  publicRuntimeConfig: { serverUrl },
} = getConfig();

const Reviews = ({
  total,
  reviews,
  reviewImages,
  getReviewByPage,
  changeBigImage,
}) => {
  const router = useRouter();
  function callbacks(page) {
    if (page) {
      router.push(`?page=${page}`);
      getReviewByPage(page);
    }
  }
  useEffect(() => {
    callbacks(router.query.page || 1);
  }, [router.query.page]);

  return (
    <>
      <TitleNavigation title="отзывы" currentPage="Отзывы" />

      <GlobalSection
        isWeb={true}
        isMobile={true}
        webPadding="50px 0"
        mobilePadding="50px 0"
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.secondBackground}
      >
        {reviewImages.length === 0 ? (
          <DataEmpty title="Нет отзывов" />
        ) : (
          <>
            <ReviewContainer>
              {reviews.map((e, i) => {
                const images = reviewImages
                  .map((image) => {
                    if (image.review_id == e.id) {
                      return image;
                    }
                  })
                  .filter((e) => e !== undefined);

                return (
                  <div key={i} className="review-item">
                    <div className="info">
                      <div className="avatar">
                        <img src="/images/no_found/user.png" alt="user" />
                      </div>
                      <div className="name">
                        <h2>{e.full_name}</h2>
                      </div>
                      <div className="comment">
                        <p>{e.comment}</p>
                      </div>
                    </div>
                    <div className="uploaded-images">
                      {images.map(({ folder, file_name, file_format }, i) => {
                        return (
                          <img
                            key={i}
                            alt={file_name}
                            src={`${serverUrl}/${folder}${file_name}.${file_format}`}
                            onClick={() =>
                              changeBigImage(
                                `${serverUrl}/${folder}${file_name}.${file_format}`
                              )
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </ReviewContainer>
            <Pagination
              total={total}
              page={router.query.page}
              callback={callbacks}
            />
          </>
        )}
      </GlobalSection>
    </>
  );
};

export default React.memo(Reviews);
