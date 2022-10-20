import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
