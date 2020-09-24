import React from "react";
import { Link } from "react-router-dom";

function LogOutLink() {
  return (
    <div>
      <Link to="/forgot" className="navbar__link">
        <div className="navbar__option">
          <span>Log Out</span>
        </div>
      </Link>
    </div>
  );
}

export default LogOutLink;
