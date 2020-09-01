import React from "react";
import { Link } from "react-router-dom";

export default function TextLink(props) {
  const { to, text } = props;

  return (
    <Link to={to} className="text-link">
      {text}
    </Link>
  );
}
