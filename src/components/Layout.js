import React from "react";
import FormTitle from "./FormTitle";

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-grid">
        <FormTitle className="sign-in__title" text="Login" />
        {props.children}
      </div>
    </div>
  );
}
