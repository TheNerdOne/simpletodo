import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="m-3">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            {/* <Link
              to="/simpletodo"
              className={
                props.location.pathname === "/simpletodo"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              کارهای روزانه
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                props.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              درباره سازنده
            </Link> */}
            <NavLink to="/simpletodo" className="nav-link" exact>
              کارهای روزانه
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              درباره سازنده
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Nav);
