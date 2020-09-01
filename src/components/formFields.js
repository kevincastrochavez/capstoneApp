import React from "react";

export function FormInput(props) {
  const { className, title, input, type, placeholder } = props;

  return (
    <div className={`${className} form-input`}>
      <label className="form-input__title">{title}</label>
      <input
        className="form-input__input"
        type={type}
        {...input}
        placeholder={placeholder}
      />
    </div>
  );
}

export function FormButton(props) {
  const { className, title, type, input } = props;

  return (
    <div className={`${className} form-button`}>
      <button className="form-button__button" type={type} {...input}>
        {title}
      </button>
    </div>
  );
}
