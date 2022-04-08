import React from "react";
import { Routes, Route } from "react-router";

import Home from "./components/01-Home";
import Grid from "./components/04-Grid";
import Card from "./components/05-Card";
import LoginForm from "./components/02-LoginForm";
import SignUpForm from "./components/03-SignUpForm";
import Footer from "./components/06-Footer";
import GoogleMap from "./components/07-GoogleMap";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/brooklyn" element={<Grid />} />
        <Route path="/brooklyn/aparments" element={<Grid />} />
        <Route path="/brooklyn/houses" element={<Grid />} />
        <Route path="/brooklyn/map" element={<GoogleMap />} />

        <Route path="/manhattan" element={<Grid />} />
        <Route path="/manhattan/aparments" element={<Grid />} />
        <Route path="/manhattan/houses" element={<Grid />} />
        <Route path="/manhattan/map" element={<GoogleMap />} />

        <Route path="/newjersey" element={<Grid />} />
        <Route path="/newjersey/aparments" element={<Grid />} />
        <Route path="/newjersey/houses" element={<Grid />} />
        <Route path="/newjersey/map" element={<GoogleMap />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
