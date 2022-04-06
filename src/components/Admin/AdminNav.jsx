import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <Link to={"/admin"} className="navbar-item has-dropdown is-hoverable">
        <strong className="navbar-link">Admin</strong>
        <div className="navbar-dropdown">
          <Link to={"/admin/users"}>
            <a className="navbar-item">Users</a>
          </Link>
          <Link to={"/admin/properties"}>
            <a className="navbar-item">Properties</a>
          </Link>
        </div>
      </Link>
    </>
  );
};
export default AdminNav;
