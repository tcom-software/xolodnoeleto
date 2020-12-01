const getImages = (photos, articule) => {
  const getMainImage = photos
    .filter((e) => e.cover_photo === 1)
    .reduce((acc, next) => next, {});
  const { folder, file_name, file_format } = getMainImage;
  return {
    id: articule,
    product_picture_file_name: file_name,
    product_picture_folder: folder,
    product_picture_format: file_format,
    series_picture_file_name: file_name,
    series_picture_folder: folder,
    series_picture_format: file_format,
  };
};

export default getImages;
