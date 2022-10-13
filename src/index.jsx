import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);
