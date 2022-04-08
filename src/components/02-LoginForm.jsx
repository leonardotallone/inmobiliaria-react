import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; // Manda info al store
import { sendLoginRequest } from "../store/user";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch(); //manda info al store

  // const user = useSelector((state) => state.user);
  // const user = JSON.parse(localStorage.getItem("user"));  
    
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendLoginRequest({ email, password }))
    .then(() => navigate("/"));
  };
  

  return (
    <>
      <section className="hero is-fullheight is-warning">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <Link to={"/"}>
                <strong className="is-size-2 has-text-black">
                  The NY City Brooker
                </strong>
              </Link>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">
                Please login to proceed.
              </p>
              <div className="box">
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        onChange={emailHandler}
                        value={email}
                        className="input is-small"
                        type="email"
                        placeholder="Your Email"
                        autoFocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        onChange={passwordHandler}
                        value={password}
                        className="input is-small"
                        type="password"
                        placeholder="Your Password"
                      />
                    </div>
                  </div>
                  <div className="field"></div>
                  <button className="button is-centered is-warning is-small">
                    Login <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
              <p className="has-text-black">
                <a>Already have an account?  </a>
                <a className="has-text-is-small" href="/signup">
                   Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
