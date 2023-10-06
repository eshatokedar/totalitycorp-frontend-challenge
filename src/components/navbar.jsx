import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">Totality Corp</div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/cart">
          Cart <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};