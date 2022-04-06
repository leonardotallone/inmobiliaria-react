import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendSignupRequest = createAsyncThunk("SIGN_UP", (SignupObject) => {
  return axios
    .post("http://localhost:8000/api/users/register", SignupObject)
    .then((res) => res.data);
});

export const sendLoginRequest = createAsyncThunk("LOGIN", (LoginObject) => {
  return axios
    .post("http://localhost:8000/api/users/login", LoginObject)
    .then((res) => {
      //   localStorage.setItem("token", res.data.salt)
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    })
    .catch((err) => console.log(err));
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios
    .post("http://localhost:8000/api/users/logout")
    .then((res) => {
      localStorage.removeItem("user");
      return res.data;
    })
    .catch((err) => console.log(err));
});

export const addToFavorite = createAsyncThunk(
  "ADD_ TO_FAVORITE",
  (propertiesId, ThunkAPI) => {
    const { user } = ThunkAPI.getState();
    if (!user._id) throw new Error("You need to be logged in");

    return axios
      .put(
        `http://localhost:8000/api/users/favorite?userId=${user._id}&propertiesId=${propertiesId}`
      )
      .then((res) => res.data);
  }
);

const userReducer = createReducer(
  {},
  {
    [sendSignupRequest.fulfilled]: (state, action) => action.payload,
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    [addToFavorite.fulfilled]: (state, action) => action.payload,
  }
);

export default userReducer;
