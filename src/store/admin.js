import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("USER_LIST", () => {
  return axios
    .post("http://localhost:8000/api/admin/showUser")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});



const adminReducer = createReducer(
  {},
  {
    [getAllUsers.fulfilled]: (state, action) => action.payload,
  }
);

export default adminReducer;
