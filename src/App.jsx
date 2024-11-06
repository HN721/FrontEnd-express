import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./component/HomePage";
import PublicNavbar from "./component/Navbar/PublicNavbar";
import LoginForm from "./component/Users/Login";
import RegistrationForm from "./component/Users/Register";
import PrivateNavbar from "./component/Navbar/PrivateNavbar";
import { useSelector } from "react-redux";
import AddCategory from "./component/category/AddCategory";
import UserProfile from "./component/Users/UserProfile";
import CategoriesList from "./component/category/CategoriesList";
import UpdateCategory from "./component/category/UpdateCategory";
import TransactionForm from "./component/Transactions/TransactionForm";
import Dashboard from "./component/Users/Dashboard";
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
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/update-category/:id" element={<UpdateCategory />} />
        <Route path="/add-transaction" element={<TransactionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
