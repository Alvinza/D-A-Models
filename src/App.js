import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Babies from "./components/Babies";
import Contact from "./components/Contact";
import Girls from "./components/Girls";
import Kids from "./components/Kids";
import Men from "./components/Men";
import Women from "./components/Women";
import Apply from "./components/Apply";
import Policy from "./components/Policy";
import Boys from "./components/Boys";

function App() {
  return (
    <div>
      <NavBar />
    {/* routes for different pages */}
      <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/babies" element={<Babies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
