import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProperties = createAsyncThunk("GET_ALL_PROPERTIES", () => {
  return axios
    .get("http://localhost:8000/api/properties")
    .then((res) => res.data);
});
//-----------------Brooklyn------------------------------------
export const Brooklyn = createAsyncThunk("BROOKLYN", () => {
  return axios
    .get("http://localhost:8000/api/properties/brooklyn")
    .then((res) => res.data);
});
export const BrooklynHouses = createAsyncThunk("BROOKLYN_HOUSES", () => {
  return axios
    .get("http://localhost:8000/api/properties/brooklyn/house")
    .then((res) => res.data);
});
export const BrooklynAparments = createAsyncThunk("BROOKLYN_APARMETS", () => {
  return axios
    .get("http://localhost:8000/api/properties/brooklyn/aparment")
    .then((res) => res.data);
});
//-----------------Manhattan------------------------------------
export const Manhattan = createAsyncThunk("MANHATTAN", () => {
  return axios
    .get("http://localhost:8000/api/properties/manhattan")
    .then((res) => res.data);
});
export const ManhattanHouses = createAsyncThunk("MANHATTAN_HOUSES", () => {
  return axios
    .get("http://localhost:8000/api/properties/manhattan/house")
    .then((res) => res.data);
});
export const ManhattanAparments = createAsyncThunk("MANHATTAN_APARMETS", () => {
  return axios
    .get("http://localhost:8000/api/properties/manhattan/aparment")
    .then((res) => res.data);
});
//-----------------New Jersey------------------------------------
export const NewJersey = createAsyncThunk("NEW_JERSEY", () => {
  return axios
    .get("http://localhost:8000/api/properties/new Jersey")
    .then((res) => res.data);
});
export const NewJerseyHouses = createAsyncThunk("NEW_JERSEY_HOUSES", () => {
  return axios
    .get("http://localhost:8000/api/properties/new Jersey/house")
    .then((res) => res.data);
});
export const NewJerseyAparments = createAsyncThunk("NEW_JERSEY_APARMETS", () => {
  return axios
    .get("http://localhost:8000/api/properties/new Jersey/aparment")
    .then((res) => res.data);
});

const propertiesReducer = createReducer(
  {},
  {
    [getAllProperties.fulfilled]: (state, action) => action.payload,

    [Brooklyn.fulfilled]: (state, action) => action.payload,
    [BrooklynHouses.fulfilled]: (state, action) => action.payload,
    [BrooklynAparments.fulfilled]: (state, action) => action.payload,

    [Manhattan.fulfilled]: (state, action) => action.payload,
    [ManhattanHouses.fulfilled]: (state, action) => action.payload,
    [ManhattanAparments.fulfilled]: (state, action) => action.payload,

    [NewJersey.fulfilled]: (state, action) => action.payload,
    [NewJerseyHouses.fulfilled]: (state, action) => action.payload,
    [NewJerseyAparments.fulfilled]: (state, action) => action.payload,

  }
);

export default propertiesReducer;
