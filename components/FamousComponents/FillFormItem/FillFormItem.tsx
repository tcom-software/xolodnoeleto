import React, { useEffect, useState } from "react";
import theme from "styles/theme";
import { connect } from "react-redux";
import { Select, SvgIcon } from "@famous";
import { phoneNumberFormat } from "@utils";
import DatePicker from "react-datepicker";
import ImageUploading from "react-images-uploading";
import { FormValidationInterface } from "interfaces";
import { Input, Message, InputContainer, Textarea } from "./styles";

const FillFormItem = ({
  data,
  callback,
  name,
  type,
  worksTime,
  initialErrorState,
  inputsValidationData,
  forHtml,
  textareaHeight,
}: FormValidationInterface) => {
  const [errorStyle, setErrorStyle] = useState(false);
  const { errorMessage, validation, placeholder } = inputsValidationData[name];

  useEffect(() => {
    setErrorStyle(initialErrorState);
  }, [initialErrorState]);

  const handleChange = ({ target: { value } }) => {
    let result;
    if (name == "phone") {
      const { errorStatus, phone } = phoneNumberFormat(value, data, name);
      callback(phone);
      result = errorStatus;
    } else {
      result = validation.test(value);
      callback(value);
    }

    if (!result) {
      setErrorStyle(true);
    } else {
      setErrorStyle(false);
    }
  };

  const Case = () => {
    if (type === "select" && worksTime) {
      const [start, stop] = worksTime;
      const needsTime = stop - start;
      const newArray = Array.from(Array(needsTime).keys());

      return (
        <Select
          forHtml={forHtml}
          title={placeholder}
          data={data}
          name={name}
          callback={callback}
          errorStyleCallback={() => setErrorStyle(false)}
        >
          {newArray.map((e: number, i: number) => {
            const format =
              start + e < 10 ? `0${start + e}:00` : `${start + e}:00`;
            return (
              <option key={i} value={format}>
                {format}
              </option>
            );
          })}
        </Select>
      );
    } else if (type === "textarea") {
      return (
        <Textarea
          height={textareaHeight}
          id={forHtml}
          value={data[name]}
          onChange={handleChange}
          placeholder={placeholder}
          errorStyle={errorStyle}
        />
      );
    } else if (type === "uploadImages") {
      const { uploadImages }: any = data;

      return (
        <ImageUploading
          multiple
          maxNumber={5}
          maxFileSize={20 * 1024 * 1024} // 20 MB
          acceptType={["jpg", "jpeg", "png"]}
          onChange={(imageData) => {
            callback([...imageData]);
          }}
          value={uploadImages}
        >
          {({ imageList, onImageUpload, onImageRemoveAll }) => {
            return (
              <div className="upload-image-container" onClick={onImageUpload}>
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
    } else if (type === "datepicker") {
      return (
        <div
          className={`datepicker-container ${
            errorStyle ? "datepicker-error" : ""
          }`}
        >
          <DatePicker
            selected={data[name]}
            onChange={(data) => {
              callback(data);
            }}
            placeholderText={placeholder}
          />
          <SvgIcon type={"arrowUp"} width={10} height={10} />
          <SvgIcon type={"arrowDown"} width={10} height={10} />
        </div>
      );
    } else {
      return (
        <Input
          type="text"
          id={forHtml}
          value={data[name]}
          onChange={handleChange}
          placeholder={placeholder}
          errorStyle={errorStyle}
        />
      );
    }
  };

  return (
    <InputContainer errorStyle={errorStyle}>
      {Case()}
      <Message errorStyle={errorStyle}>{errorMessage}</Message>
    </InputContainer>
  );
};

const mapStateToProps = ({ general: { inputsValidationData } }) => ({
  inputsValidationData,
});
export default connect(mapStateToProps)(FillFormItem);
