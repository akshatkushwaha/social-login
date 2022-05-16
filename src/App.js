import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import SigninPage from "./Componenets/SigninPage";
import "./index.css";
import Dashboard from "./Componenets/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<SigninPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
