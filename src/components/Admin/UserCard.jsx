import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getOneUser } from "../../store/admin";
import { editUser } from "../../store/admin";
import { deleteUser } from "../../store/admin";

const UserCard = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [controlcheck, setControlcheck] = useState(false);
  const [admin, setAdmin] = useState(false);
  // const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams(); //este va al dispatch de getOneUser

  useEffect(() => {
    dispatch(getOneUser(id.id));
  }, []);
  const user = useSelector((state) => state.admin);
 

  const handleSubmit = (e) => {
    if (controlcheck) {
      e.preventDefault();
      dispatch(
        editUser({ name, surname, email, password, adress, phoneNumber, admin })
      );
    }
  };
  const updateUser = (e) => {
    e.preventDefault();
    dispatch(editUser({ name, surname, email, password, adress, phoneNumber, admin }))
    .then(() => navigate("/admin/users"));
  };
  const eraseUser = (e) => {
    e.preventDefault();
    dispatch(deleteUser())
    .then(() => navigate("/admin/users"));
  };
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
  const handleCheck = (e) => {
    e.preventDefault();
    setAdmin(!admin);
    // setUser({
    //   id: user.id,
    //   name: user.name,
    //   surname: user.surname,
    //   email: user.email,
    //   password: user.password,
    //   admin: !user.admin,
    //   direction: user.direction,
    //   phoneNumber: user.phoneNumber,
    // });
    setControlcheck(true);
  };

  return (
    <>
      <section className="hero is-warning is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <strong className="is-size-2 has-text-black">User Details</strong>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">
                Please Update or Remove User
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
                  <div className="field">
                    <strong
                      onClick={updateUser}
                      className="button is-success has-text-white is-small"
                    >
                      Update User
                    </strong>
                  </div>
                  <strong
                    onClick={eraseUser}
                    className="button is-danger has-text-white is-small"
                  >
                    Remove User
                  </strong>
                </form>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={admin ? true : false}
                    onChange={handleCheck}
                  />
                  Set User as Admin
                </label>
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

export default UserCard;
