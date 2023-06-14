import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Footer from "./components/Footer/Footer";
import Restaurants from "./pages/Restaurants/Restaurants";
import LogIn from "./pages/LogIn/LogIn";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
