import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { sendLogoutRequest } from "../store/user";

import { getAllProperties } from "../store/properties";

import { Brooklyn } from "../store/properties";
import { BrooklynAparments } from "../store/properties";
import { BrooklynHouses } from "../store/properties";

import { Manhattan } from "../store/properties";
import { ManhattanAparments } from "../store/properties";
import { ManhattanHouses } from "../store/properties";

import { NewJersey } from "../store/properties";
import { NewJerseyAparments } from "../store/properties";
import { NewJerseyHouses } from "../store/properties";

import AdminNav from "./Admin/AdminNav";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  // const user = useSelector((state) => state.user);

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequest()).then(() => navigate("/"));
  };

  const allProperties = (e) => {
    e.preventDefault();
    dispatch(getAllProperties());
  };

  const allBrooklyn = (e) => {
    e.preventDefault();
    dispatch(Brooklyn()).then(() => navigate("/brooklyn"));
  };
  const allBrooklynAparments = (e) => {
    e.preventDefault();
    dispatch(BrooklynAparments()).then(() => navigate("/brooklyn/aparments"));
  };
  const allBrooklynHouses = (e) => {
    e.preventDefault();
    dispatch(BrooklynHouses()).then(() => navigate("/brooklyn/houses"));
  };
  const allManhattan = (e) => {
    e.preventDefault();
    dispatch(Manhattan()).then(() => navigate("/manhattan"));
  };
  const allManhattanAparments = (e) => {
    e.preventDefault();
    dispatch(ManhattanAparments()).then(() => navigate("/manhattan/aparments"));
  };
  const allManhattanHouses = (e) => {
    e.preventDefault();
    dispatch(ManhattanHouses()).then(() => navigate("/manhattan/houses"));
  };
  const allNewJersey = (e) => {
    e.preventDefault();
    dispatch(NewJersey()).then(() => navigate("/newjersey"));
  };
  const allNewJerseyAparments = (e) => {
    e.preventDefault();
    dispatch(NewJerseyAparments()).then(() => navigate("/newjersey/aparments"));
  };
  const allNewJerseyHouses = (e) => {
    e.preventDefault();
    dispatch(NewJerseyHouses()).then(() => navigate("/newjersey/houses"));
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
            <a className="navbar-item has-dropdown is-hoverable">
              <strong onClick={allBrooklyn} className="navbar-link">
                Brooklyn
              </strong>
              <div className="navbar-dropdown">
                <a onClick={allBrooklynAparments}>
                  <a className="navbar-item">Aparments</a>
                </a>
                <a>
                  <a onClick={allBrooklynHouses} className="navbar-item">
                    Houses
                  </a>
                </a>
                <hr className="navbar-divider" />
                <Link to={"/brooklyn/map"}>
                  <a className="navbar-item">Map</a>
                </Link>
              </div>
            </a>

            <a className="navbar-item has-dropdown is-hoverable">
              <strong onClick={allManhattan} className="navbar-link">
                Manhattan
              </strong>
              <div className="navbar-dropdown">
                <a>
                  <a onClick={allManhattanAparments} className="navbar-item">
                    Aparments
                  </a>
                </a>
                <a>
                  <a onClick={allManhattanHouses} className="navbar-item">Houses</a>
                </a>
                <hr className="navbar-divider" />
                <Link to={"/manhattan/map"}>
                  <a className="navbar-item">Map</a>
                </Link>
              </div>
            </a>
            <a
              
              className="navbar-item has-dropdown is-hoverable"
            >
              <strong onClick={allNewJersey} className="navbar-link">New Jersey</strong>
              <div className="navbar-dropdown">
                <a>
                  <a onClick={allNewJerseyAparments} className="navbar-item">Aparments</a>
                </a>
                <a>
                  <a onClick={allNewJerseyHouses} className="navbar-item">Houses</a>
                </a>
                <hr className="navbar-divider" />
                <Link to={"/newjersey/map"}>
                  <a className="navbar-item">Map</a>
                </Link>
              </div>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <strong className="navbar-item">
                {user ? `Hello ${user.name} !` : null}
              </strong>
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
