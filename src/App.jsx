import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import './styles/theme.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Intro />
          <About />
          <Footer />
        </>} />
        
      </Routes>
    </Router>
  );
};

export default App;
