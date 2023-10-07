import {React, useState} from "react";
import { Link } from "react-router-dom";
import UserLogin from "../pages/login/UserLogin";
import { ShoppingCart, House, UserPlus } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
    <div className="navbar">
      <div className="title">Totality Corp</div>
      <div className="links">
        <Link to="/" className="home-nav"> <House size={32} /></Link>
        <Link to="/cart" className="cart-nav">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/login" className="login-nav">
        <UserPlus size={32} />
        </Link>
      </div>
      </div>
      </div>
  );
};