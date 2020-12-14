import React from "react";
import Datepicker from "./Datepicker";
import SelectTime from "./SelectTime";
import ImageUploader from "./ImageUploader";
import { Input, Textarea } from "../styles";

const Case = ({
  props: {
    data,
    callback,
    name,
    type,
    worksTime,
    forHtml,
    textareaHeight,
    required,
  },
  placeholder,
  handleChange,
  errorStyle,
  setErrorStyle,
}: any) => {
  if (type === "select" && worksTime) {
    const [start, stop] = worksTime;
    const needsTime = stop - start;
    const newArray = Array.from(Array(needsTime).keys());

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
  } else if (type === "uploadImages") {
    const { uploadImages }: any = data;
    return <ImageUploader callback={callback} uploadImages={uploadImages} />;
  } else if (type === "datepicker") {
    return (
      <Datepicker
        data={data}
        callback={callback}
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
