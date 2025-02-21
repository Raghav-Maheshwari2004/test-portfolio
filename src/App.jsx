import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Talksy from "./pages/Talksy"; // Import Talksy Page

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
        <Route path="/talksy" element={<Talksy />} />
      </Routes>
    </Router>
  );
};

export default App;
