import React from "react";
import { Routes, Route } from "react-router";

import Home from "./components/01-Home";
import Grid from "./components/04-Grid";
import Card from "./components/05-Card";
import LoginForm from "./components/02-LoginForm";
import SignUpForm from "./components/03-SignUpForm";
import Footer from "./components/06-Footer";
import GoogleMap from "./components/07-GoogleMap";
import AdminProperties from "./components/Admin/AdminProperties";
import AdminUsers from "./components/Admin/AdminUsers";
import UserCard from "./components/Admin/UserCard"
import PropertyCard from "./components/Admin/PropertyCard"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/:location" element={<Grid />} />
        <Route path="/:location/:category" element={<Grid />} />
        <Route path="/:location/map" element={<GoogleMap />} />

        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/usercard/:id" element={<UserCard />} />
        <Route path="/admin/properties" element={<AdminProperties />} />
        <Route path="/admin/property/:id" element={<PropertyCard />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
