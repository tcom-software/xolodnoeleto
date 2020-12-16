import { SvgIcon } from "@famous";
import React from "react";
import theme from "styles/theme";
import ImageUploading from "react-images-uploading";

const ImageUploader = ({ uploadImages, callback, errorStyle }) => {
  return (
    <ImageUploading
      multiple
      maxNumber={5}
      maxFileSize={20 * 1024 * 1024} // 20 MB
      acceptType={["jpg", "jpeg", "png"]}
      onChange={(imageData) => {
        callback({
          target: {
            value: [...imageData],
          },
        });
      }}
      value={uploadImages}
    >
      {({ imageList, onImageUpload, onImageRemoveAll }) => {
        return (
          <div
            className={`upload-image-container ${
              errorStyle ? "review-upload-error" : ""
            }`}
            onClick={onImageUpload}
          >
            <p>Загрузить Изображение ({uploadImages.length})</p>
            {uploadImages.length === 0 ? (
              <SvgIcon type="circleWithPlus" width={16} height={16} />
            ) : (
              <SvgIcon
                type="close"
                width={16}
                height={16}
                callback={() => onImageRemoveAll()}
                color={theme.body.primaryColor}
              />
            )}
          </div>
        );
      }}
    </ImageUploading>
  );
};
export default ImageUploader;
