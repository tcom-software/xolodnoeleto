import getConfig from "next/config";

const makeImagePath = ({
  series_picture_folder,
  series_picture_file_name,
  series_picture_format,
  product_picture_folder,
  product_picture_file_name,
  product_picture_format,
}) => {
  const {
    publicRuntimeConfig: { productsUpload, seriesUpload, serverUrl },
  } = getConfig();

  const picture =
    product_picture_file_name !== null
      ? `${product_picture_folder}/size300/${product_picture_file_name}.${product_picture_format}`
      : `${series_picture_folder}/size300/${series_picture_file_name}.${series_picture_format}`;

  const imagePath = picture.indexOf("null")
    ? `${serverUrl}${
        product_picture_file_name == null ? seriesUpload : productsUpload
      }${picture}`
    : "/images/no_found/broken-image.png";

  return imagePath;
};

export default makeImagePath;
