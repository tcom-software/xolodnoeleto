import getConfig from "next/config";

const makeImagePath = (product) => {
  const {
    cover_photo,
    product_picture_folder: PPFol,
    product_picture_format: PPFor,
    product_picture_file_name: PPFN,
  } = product;

  const {
    publicRuntimeConfig: { productsUpload, seriesUpload, serverUrl },
  } = getConfig();

  if (PPFol !== null && PPFor !== null && PPFN !== null) {
    return `${serverUrl}${productsUpload}/size300/${PPFN}.${PPFor}`;
  } else {
    const mainPicture = JSON.parse(cover_photo)
      .filter(({ cover_photo }) => cover_photo === 1)
      .reduce((acc, next) => {
        return {
          ...next,
        };
      }, {});

    const {
      series_picture_format: SPFor,
      series_picture_file_name: SPFN,
    } = mainPicture;

    return `${serverUrl}${seriesUpload}/size300/${SPFN}.${SPFor}`;
  }
};

export default makeImagePath;
