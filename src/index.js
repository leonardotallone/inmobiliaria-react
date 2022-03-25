import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";// Import for not render on StrictMode. npm i react-router-dom

import * as React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import App from "./App";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
