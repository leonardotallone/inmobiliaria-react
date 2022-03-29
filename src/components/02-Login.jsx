import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //    alert (`${username}, ${password}`)
    navigate("/");
  };

  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (sign) {
  //       axios
  //         .post("http://localhost:8000/api/users/register", {
  //           username: username,
  //           password: password,
  //         })
  //         .then((res) => res.data)
  //         .then((datos) => {
  //           console.log("Signed Up", datos);

  //           axios
  //             .post("http://localhost:8000/api/users/login", {
  //               username: username,
  //               password: password,
  //             })
  //             .then((res) => res.data)
  //             .then((datos) => {
  //               navigate("/");
  //             });
  //         });
  //     }
  //     setSign(false);
  //   }, [sign]);

  return (
    <>
      <body className="passport">
        <section className="prompt">
          <h3>The NY City Brooker</h3>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <section>
              <label for="username">Username</label>
              <input
                onChange={usernameHandler}
                value={username}
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                autofocus
              />
            </section>
            <section>
              <label for="current-password">Password</label>
              <input
                onChange={passwordHandler}
                value={password}
                id="current-password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
              />
            </section>
            <button type="submit">Sign in</button>
          </form>
          <hr />
          <p className="help">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </section>
        <footer className="info">
          <p>Created by Leonardo Tallone</p>
          <p>
            Part of{" "}
            <a href="https://todomvc.com">Pixeles Desarrollo Urbano SRL</a>
          </p>
          <p>
            Authentication powered by{" "}
            <a href="https://www.passportjs.org">Passport</a>
          </p>
        </footer>
      </body>
    </>
  );
};
export default Login;
