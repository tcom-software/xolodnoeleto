const adsImgCollection = (photos) => {
  /**
   *  @info this function need for that case if product added in state with axios,
   *  for example addBasket, addFavorite etc.
   *
   *  @params product images in array
   *  @return Collection for Ads image
   * */
  const { folder, file_name, file_format } = photos
    .filter((e) => e.cover_photo === 1)
    .reduce((acc, next) => next, {});

  let img = {
    cover_photo: JSON.stringify([{}]),
    product_picture_folder: null,
    product_picture_format: null,
    product_picture_file_name: null,
  };

  if (folder === "products0") {
    img = {
      ...img,
      product_picture_folder: folder,
      product_picture_format: file_format,
      product_picture_file_name: file_name,
    };
  }

  if (folder === "product_series0") {
    img = {
      ...img,
      cover_photo: JSON.stringify([
        {
          cover_photo: 1,
          series_picture_folder: folder,
          series_picture_format: file_format,
          series_picture_file_name: file_name,
        },
      ]),
    };
  }
  return img;
};

export default adsImgCollection;
