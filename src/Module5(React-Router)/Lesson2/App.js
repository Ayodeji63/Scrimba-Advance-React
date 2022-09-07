import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Profile/Settings";
import Info from "./Pages/Profile/Info";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home pple={"We are pple"} />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="info" element={<Info />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
