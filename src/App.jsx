import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./component/HomePage";
import PublicNavbar from "./component/Navbar/PublicNavbar";
import LoginForm from "./component/Users/Login";
import RegistrationForm from "./component/Users/Register";
export default function App() {
  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  );
}
