import { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ModalProvider from "./features/modal/ModalProvider";
import HomeDetails from "./components/HomeDetails";
import Login from "./components/Login";

function App() {
  return (
    <div className="app relative ">
      {/* <ModalProvider /> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<HomeDetails />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
