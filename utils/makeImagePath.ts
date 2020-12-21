import getConfig from "next/config";

const makeImagePath = ({ folder, file_name, file_format }) => {
  const {
    publicRuntimeConfig: { productsUpload, seriesUpload, serverUrl },
  } = getConfig();

  const picture =
    folder === "products0"
      ? `${productsUpload}/size300/${file_name}.${file_format}`
      : `${seriesUpload}/size300/${file_name}.${file_format}`;

  const imagePath = `${serverUrl}${picture}`;
  return imagePath;
};

export default makeImagePath;
