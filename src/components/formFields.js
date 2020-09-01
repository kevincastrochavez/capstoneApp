import React from "react";

export function FormInput(props) {
  const { className, title } = props;

  return (
    <div className="form-input">
      <label>{title}</label>
      <input className={`${className} form-input`} />
    </div>
  );
}
