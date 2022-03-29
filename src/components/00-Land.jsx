import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Land = () => {
  let [logInClick, setLogInClick] = useState(false);

  return (
    <body>
      <section className="hero is-warning is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <strong className="is-size-1 navbar-item has-text-white">
                  The NY City Brooker
                </strong>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item">
                    <Link to={"/"} className="button is-white is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-code"></i>
                      </span>
                      <span>Home</span>
                    </Link>
                  </span>
                  <span className="navbar-item">
                    <Link to={"/houses"} className="button is-white is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-house"></i>
                      </span>
                      <span>Houses</span>
                    </Link>
                  </span>
                  <span className="navbar-item">
                    <Link to={"/aparments"} className="button is-white is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-building"></i>
                      </span>
                      <span>Aparments</span>
                    </Link>
                  </span>
                  <span className="navbar-item">
                    <Link
                      to={"/login"}
                      className="button is-white is-outlined"
                      onClick={() => setLogInClick(!logInClick)}
                    >
                      <span className="icon">
                        <i className="fa-solid fa-key"></i>
                      </span>
                      <p>Log in</p>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title">Find out you Home right Now!</h1>
              <h2 className="subtitle">
                Don't waste your time, contact us, we have hundreds of
                properties throughout Manhattan, Brooklyn and New Jersey!
              </h2>
              {/* <div className="box">
                    <div className="field is-grouped">
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="text"
                          placeholder="Enter your email"
                        />
                      </p>
                      <p className="control">
                        <a className="button is-info">Notify Me</a>
                      </p>
                    </div>
                  </div> */}
            </div>
          </div>
        </div>
      </section>
      <script async type="text/javascript" src="../js/bulma.js"></script>
    </body>
  );
};
export default Land;
