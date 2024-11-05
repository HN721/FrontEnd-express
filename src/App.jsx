import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./component/HomePage";
import PublicNavbar from "./component/Navbar/PublicNavbar";
import LoginForm from "./component/Users/Login";
import RegistrationForm from "./component/Users/Register";
import PrivateNavbar from "./component/Navbar/PrivateNavbar";
import { useSelector } from "react-redux";
import Dashboard from "./component/Users/Dashboard";
import UserProfile from "./component/Users/UserProfile";

export default function App() {
  //get the token
  const user = useSelector((state) => state?.auth?.user);

  return (
    <BrowserRouter>
      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
