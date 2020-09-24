import React from "react";
import { Link } from "react-router-dom";

function LogOutLink() {
  return (
    <div>
      <Link onClick={() => window.location.reload()} className="navbar__link">
        <div className="navbar__option">
          <span>Log Out</span>
        </div>
      </Link>
    </div>
  );
}

export default LogOutLink;
