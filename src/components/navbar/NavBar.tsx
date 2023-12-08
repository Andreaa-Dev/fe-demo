import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to=""> Home</Link>
      <Link to="/landing"> Landing</Link>
      <Link to="/products"> Products</Link>

      <Link to="/register"> Register</Link>
      <Link to="/login"> Log in</Link>
      <Link to="/dashboard"> DashBoard</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order</Link>
    </div>
  );
}
