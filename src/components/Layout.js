import React from "react";

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-grid">{props.children}</div>
    </div>
  );
}
