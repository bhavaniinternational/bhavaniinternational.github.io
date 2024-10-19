import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppFloatingButton from "./components/WhatsAppIcon";
import Home from "./pages/Home";
import WebDevelopmentSection from "./pages/webdevelopement/WebDevelopmentSection ";
import "./App.css";
import AppDevelopement from "./pages/appdevelopement/AppDevelopement";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDevelopmentSection />} />
        <Route path="/app-development" element={<AppDevelopement />} />
      </Routes>
      <Footer />
      <WhatsAppFloatingButton />
      <ScrollToTop />
    </Router>
  );
}

export default App;
