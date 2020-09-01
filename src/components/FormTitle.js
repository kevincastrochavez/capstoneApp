import React from "react";

function FormTitle(props) {
  const { className, text } = props;

  return <h1 className={`${className} form-tittle`}>{text}</h1>;
}

export default FormTitle;
