import React from "react";
import Datepicker from "./Datepicker";
import SelectTime from "./SelectTime";
import Rating from "./Rating";
import ImageUploader from "./ImageUploader";
import { Input, Textarea } from "../styles";

const Case = ({
  props: { data, callback, name, type, worksTime, forHtml, textareaHeight },
  placeholder,
  handleChange,
  errorStyle,
  setErrorStyle,
}) => {
  if (type === "select" && worksTime) {
    const [start, stop] = worksTime;
    const needsTime = stop - start;
    const newArray = Array.from(Array(needsTime + 1).keys()); // + 1 add 22:00

    return (
      <SelectTime
        data={data}
        start={start}
        forHtml={forHtml}
        newArray={newArray}
        callback={callback}
        placeholder={placeholder}
        setErrorStyle={setErrorStyle}
      />
    );
  } else if (type === "uploadImages") {
    const { uploadImages } = data;
    return (
      <ImageUploader
        callback={handleChange}
        errorStyle={errorStyle}
        uploadImages={uploadImages}
      />
    );
  } else if (type === "datepicker") {
    return (
      <Datepicker
        name={name}
        data={data}
        callback={handleChange}
        errorStyle={errorStyle}
        placeholder={placeholder}
      />
    );
  } else if (type === "rating") {
    return (
      <Rating data={data} errorStyle={errorStyle} handleChange={handleChange} />
    );
  } else if (type === "textarea") {
    return (
      <Textarea
        id={forHtml}
        value={data[name]}
        onChange={handleChange}
        height={textareaHeight}
        errorStyle={errorStyle}
        placeholder={placeholder}
      />
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

export default Case;
