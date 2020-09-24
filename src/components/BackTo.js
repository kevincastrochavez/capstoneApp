import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function BackTo({ to }) {
  return (
    <div className="back-to">
      <Link to={to}>
        <FontAwesomeIcon className="fa-angle-left" icon="angle-left" />

        <p>Back</p>
      </Link>
    </div>
  );
}

export default BackTo;
