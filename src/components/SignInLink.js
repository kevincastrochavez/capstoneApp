import React from "react";
import { Link } from "react-router-dom";

function SignInLink() {
  return (
    <div>
      <Link to="/signin" className="navbar__link">
        <div className="navbar__option">
          <span>Sign In</span>
        </div>
      </Link>
    </div>
  );
}

export default SignInLink;
