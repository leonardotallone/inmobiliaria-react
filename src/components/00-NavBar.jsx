import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendLogoutRequest } from "../store/user";

import AdminNav from "./Admin/AdminNav";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  // const user = useSelector((state) => state.user);
  // console.log(user.name);

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequest()).then(() => navigate("/"));
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={"/"}>
            <a className="navbar-item">
              <strong className="is-size-1 navbar-item has-text-black">
                The NY City Brooker
              </strong>
            </a>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link
              to={"/brooklyn"}
              className="navbar-item has-dropdown is-hoverable"
            >
              <strong className="navbar-link">Brooklyn</strong>
              <div className="navbar-dropdown">
                <Link to={"/brooklyn/aparments"}>
                  <a className="navbar-item">Aparments</a>
                </Link>
                <Link to={"/brooklyn/houses"}>
                  <a className="navbar-item">Houses</a>
                </Link>
                <hr className="navbar-divider" />
                <Link to={"/brooklyn/map"}>
                  <a className="navbar-item">Map</a>
                </Link>
              </div>
            </Link>
            <Link
              to={"/manhattan"}
              className="navbar-item has-dropdown is-hoverable"
            >
              <strong className="navbar-link">Manhattan</strong>
              <div className="navbar-dropdown">
                <Link to={"/manhattan/aparments"}>
                  <a className="navbar-item">Aparments</a>
                </Link>
                <Link to={"/manhattan/houses"}>
                  <a className="navbar-item">Houses</a>
                </Link>
                <hr className="navbar-divider" />
                <Link to={"/manhattan/map"}>
                  <a className="navbar-item">Map</a>
                </Link>
              </div>
            </Link>
            <Link
              to={"/newjersey"}
              className="navbar-item has-dropdown is-hoverable"
            >
              <strong className="navbar-link">New Jersey</strong>
              <div className="navbar-dropdown">
                <Link to={"/newjersey/houses"}>
                  <a className="navbar-item">Aparments</a>
                </Link>
                <Link to={"/newjersey/houses"}>
                  <a className="navbar-item">Houses</a>
                </Link>
                <hr className="navbar-divider" />
                <Link to={"/newjersey/map"}>
                  <a className="navbar-item">Map</a>
                </Link>
              </div>
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
            <strong className="navbar-item">{user ? `Hello ${user.name} !`: null }</strong>
              {user && user.admin ? <AdminNav /> : null}
              <div className="buttons">
                {!user ? (
                  <Link to={"/login"} className="button is-black is-outlined">
                    <span className="icon">
                      <i className="fa-solid fa-key"></i>
                    </span>
                    <p>Login</p>
                  </Link>
                ) : (
                  <p
                    onClick={handleOnClick}
                    className="button is-black is-outlined"
                  >
                    <span className="icon">
                      <i className="fa-solid fa-key"></i>
                    </span>
                    <p>Logout</p>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
