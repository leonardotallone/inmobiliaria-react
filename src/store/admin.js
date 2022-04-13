import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//------------------------ADMIN USERS------------------------------------//

export const getAllUsers = createAsyncThunk("GET_ALL_USERS", () => {
  return axios
    .get("http://localhost:8000/api/admin/userslist")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const getOneUser = createAsyncThunk("GET_ONE_USER", (userId) => {
  return axios
    .get(`http://localhost:8000/api/admin/userslist/${userId}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const editUser = createAsyncThunk("EDIT_USER", (UpdatedUser) => {
  return axios
    .post("http://localhost:8000/api/admin/updateuser", UpdatedUser)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const deleteUser = createAsyncThunk("DELETE_USER", (userId) => {
  return axios
    .delete(`http://localhost:8000/api/admin/deleteuser/${userId}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

//------------------------ADMIN PROPERTIES------------------------------------//

export const getAllProperties = createAsyncThunk("GET_ALL_PROPERTIES", () => {
  return axios
    .get("http://localhost:8000/api/admin/propertieslist")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const getOneProperty = createAsyncThunk("GET_ONE_PROPERTY", () => {
  return axios
    .get("http://localhost:8000/api/admin/propertieslist/:id")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const addProperty = createAsyncThunk("ADD_PROPERTY", () => {
  return axios
    .post("http://localhost:8000/api/admin/addproperty")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const editProperty = createAsyncThunk("EDIT_PROPERTY", (UpdatedProperty) => {
  return axios
    .post("http://localhost:8000/api/admin/updateproperty", UpdatedProperty)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const deleteProperty = createAsyncThunk("DELETE_PROPERTY", () => {
  return axios
    .post("http://localhost:8000/api/admin/deleteproperty")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

const adminReducer = createReducer(
  {},
  {
    [getAllUsers.fulfilled]: (state, action) => action.payload,
    [getOneUser.fulfilled]: (state, action) => action.payload,
    [editUser.fulfilled]: (state, action) => action.payload,
    [deleteUser.fulfilled]: (state, action) => action.payload,

    [getAllProperties.fulfilled]: (state, action) => action.payload,
    [getOneProperty.fulfilled]: (state, action) => action.payload,
    [addProperty.fulfilled]: (state, action) => action.payload,
    [editProperty.fulfilled]: (state, action) => action.payload,
    [deleteProperty.fulfilled]: (state, action) => action.payload,
  }
);

export default adminReducer;
