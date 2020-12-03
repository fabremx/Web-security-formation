import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { ReactComponent as CartLogo } from "../../assets/images/cart.svg";
import "./header.scss";
import { Link } from "react-router-dom";

export function Header() {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    if (!window.localStorage.getItem("user")) return;
    setIsUserConnected(true);
    setUsername(window.localStorage.getItem("user"));

    if (window.localStorage.getItem("isAdmin") === "1") {
      setIsUserAdmin(true);
    }
  }, []);

  const logout = () => {
    window.localStorage.clear();

    setIsUserConnected(false);
    setIsUserAdmin(false);
    setUsername(undefined);
  };

  return (
    <header>
      <div className="content">
        <div className="logo">
          <a className="navbar-brand" href="index.html">
            <img src={logo} className="logo" alt="" />
          </a>
        </div>

        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          {!isUserConnected && <Link to="/login">Login</Link>}
          {!isUserConnected && <Link to="/register">Register</Link>}
          {isUserAdmin && <Link to="/admin">Administration</Link>}
          {isUserConnected && <span onClick={logout}>Logout</span>}
        </div>

        {isUserConnected && (
          <div className="welcome-message">
            Welcome <span>{username}</span>
          </div>
        )}

        <div className="cart">
          {isUserConnected && (
            <Link to="/cart">
              <CartLogo className="cart-logo" />
              <p>My Cart</p>
              <span className="badge">3</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
