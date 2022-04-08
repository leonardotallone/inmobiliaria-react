import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux"; // Pide informacion del store de Redux
import { useDispatch } from "react-redux"; // Manda info al store
import { sendSignupRequest } from "../store/user";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch(); //manda info al store

  const user = JSON.parse(localStorage.getItem("user"));
  // const user = useSelector((state) => state.user);

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const surnameHandler = (e) => {
    e.preventDefault();
    setSurname(e.target.value);
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const adressHandler = (e) => {
    e.preventDefault();
    setAdress(e.target.value);
  };
  const phoneNumberHandler = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendSignupRequest({ name, surname, email, password, adress, phoneNumber }))
      .then(() => navigate("/login"));
  };

  return (
    <>
      <section className="hero is-warning is-fullheight">
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
                Please Register to proceed.
              </p>
              <div className="box">
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        onChange={nameHandler}
                        value={name}
                        required
                        className="input is-small"
                        type="text"
                        placeholder="Username"
                        autoFocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        onChange={surnameHandler}
                        value={surname}
                        required
                        className="input is-small"
                        type="text"
                        placeholder="Surname"
                        autoFocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        onChange={emailHandler}
                        value={email}
                        required
                        className="input is-small"
                        type="email"
                        placeholder="Your email"
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
                  <div className="field">
                    <div className="control">
                      <input
                        onChange={adressHandler}
                        value={adress}
                        className="input is-small"
                        type="text"
                        placeholder="Your Adress"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        onChange={phoneNumberHandler}
                        value={phoneNumber}
                        className="input is-small"
                        type="text"
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>
                  <div className="field"></div>
                  <button className="button is-centered is-warning is-small">
                    Sign Up <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
              <p className="has-text-black">
                <a>Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
