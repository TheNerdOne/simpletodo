import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <div className="m-3">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              کارهای روزانه
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              درباره سازنده
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
