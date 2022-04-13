import React from "react";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { getAllUsers } from "../../store/admin";
import { getAllProperties } from "../../store/admin";

const AdminNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allUsers = (e) => {
    e.preventDefault();
    dispatch(getAllUsers()).then(() => navigate("/admin/users"));
  };
  const allProperties = (e) => {
    e.preventDefault();
    dispatch(getAllProperties()).then(() => navigate("/admin/properties"));
  };

  return (
    <>
      <a className="navbar-item has-dropdown is-hoverable">
        <strong className="navbar-link">Admin</strong>
        <div className="navbar-dropdown">
          <a onClick={allUsers} className="navbar-item">
            Users
          </a>
          <a onClick={allProperties} className="navbar-item">
            Properties
          </a>
        </div>
      </a>
    </>
  );
};
export default AdminNav;
