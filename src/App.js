import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Summary from "./Summary";
//api key 9UaBTXGoKKsZzXYftzdyDqMnSK9yYzbf
import React from "react";
import HomePage from "./HomePage";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/summary/:id" element={<Summary />} />
          <Route path="/home/:username" element={<HomePage />} />
        </Routes>
      </Router>

      {/* <Summary/> */}
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
