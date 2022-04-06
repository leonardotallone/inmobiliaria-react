// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";


import userReducer  from "./user";
import adminReducer from "./admin";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    admin: adminReducer,
  },
});

export default store;
