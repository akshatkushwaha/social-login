import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import SigninPage from "./pages/SigninPage";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<SigninPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
