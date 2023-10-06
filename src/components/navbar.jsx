import {React, useState} from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, House } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">Totality Corp</div>
      <div className="links">
        <Link to="/" className="home-nav"> <House size={32} /></Link>
        <Link to="/cart" className="cart-nav">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};