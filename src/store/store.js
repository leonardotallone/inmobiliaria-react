// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./user";
import adminReducer from "./admin";
import propertiesReducer from "./properties";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    admin: adminReducer,
    properties: propertiesReducer,
  },
});

export default store;
