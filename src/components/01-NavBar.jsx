import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { useSelector } from "react-redux";
import { setUser } from "../store/user";
import { useDispatch } from "react-redux";

const NavBar = () => {
  let [logInClick, setLogInClick] = useState(false);

  //      const isLoged = useSelector( state => state.user )

  //      const dispatch = useDispatch();

  //   window.addEventListener('click', e => {
  //     let buttonLog = document.getElementById('clickLog')
  //     let tarjeta = document.getElementById('clickCard')
  //     if ( (buttonLog && !buttonLog.contains(e.target)) && (tarjeta && !tarjeta.contains(e.target)) ) {
  //       setLogInClick(false)
  //     }
  //   })

  //   useEffect(()=>
  //   {axios
  //     .get("http://localhost:8000/api/users/me")
  //     .then(res=> res.data)
  //     .then (datos=>{
  //       dispatch (setUser (datos))
  //     })},
  //    [])

  return (
    <>
      <div className="hero-head">
        <nav className="navbar">
          <div className="container sticky">
            <div className="navbar">
              <Link to={"/"}>
                <a className="navbar-item">
                  <h1 className="title">The NY City Brooker </h1>
                </a>
              </Link>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <p className="button is-white is-outlined">
                    <span className="icon">
                      <i className="fa fa-home"></i>
                    </span>
                    <span>Home</span>
                  </p>
                </span>
                <span className="navbar-item">
                  <a className="button is-white is-outlined">
                    <span className="icon">
                      <i className="fa fa-superpowers"></i>
                    </span>
                    <span>Examples</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a className="button is-white is-outlined">
                    <span className="icon">
                      <i className="fa fa-book"></i>
                    </span>
                    <span>Documentation</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a
                    className="button is-white is-outlined"
                    onClick={() => setLogInClick(!logInClick)}
                  >
                    <span className="icon">
                      <i class="fa-solid fa-key"></i>
                    </span>
                    <a href="/login">Log in</a>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* <i class="fa-solid fa-key"></i></span><p>{!isLoged?"Login":"Logout"}</p> */}
      {/* { logInClick && ( isLoged ? <NavBar /> : <Login /> ) } */}
    </>
  );
};
export default NavBar;
