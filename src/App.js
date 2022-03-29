import React from "react";
import { Routes, Route } from "react-router";

import Land from "./components/00-Land";
import Login from "./components/02-Login";
import Signup from "./components/03-Signup";
import Grid from "./components/04-Grid";

function App() {
  return (
    <>
      
      {/* <Grid/> */}

      <Routes>
         <Route path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </>
  );
}

export default App;
