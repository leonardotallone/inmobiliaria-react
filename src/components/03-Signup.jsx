import React, { useState, useEffect } from "react";

const Signup = () => {
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
  };
  return (
    <>
      <body>
        <section class="prompt">
          <h3>todos</h3>
          <h1>Sign up</h1>
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
              />
            </section>
            <section>
              <label for="new-password">Password</label>
              <input
                onChange={passwordHandler}
                value={password}
                id="new-password"
                name="password"
                type="password"
                autocomplete="new-password"
                required
              />
            </section>
            <section>
              <label for="new-password">Password</label>
              <input
                onChange={passwordHandler}
                value={password}
                id="new-password"
                name="password"
                type="password"
                autocomplete="new-password"
                required
              />
            </section>
            <button type="submit">Sign up</button>
          </form>
          <hr />
          <p class="help">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </section>
        <footer class="info">
          <p>
            Created by <a href="https://www.jaredhanson.me">Jared Hanson</a>
          </p>
          <p>
            Part of <a href="https://todomvc.com">TodoMVC</a>
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
export default Signup;
