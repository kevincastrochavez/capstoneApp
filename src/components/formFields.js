import React from "react";

export function FormInput(props) {
  const { className, title, input, type, placeholder } = props;

  return (
    <div className="form-input">
      <label className="form-input__title">{title}</label>
      <input
        className={`${className} form-input__input`}
        type={type}
        {...input}
        placeholder={placeholder}
      />
    </div>
  );
}
