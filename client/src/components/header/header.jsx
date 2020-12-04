import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import styles from "./header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { Snackbar } from "../snackbar";
import { useLocation } from "react-router";
import { Badge } from "antd";

export function Header() {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [username, setUsername] = useState(undefined);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      return;
    }

    setIsUserConnected(true);
    setUsername(window.localStorage.getItem("user"));

    if (window.localStorage.getItem("isAdmin") === "1") {
      setIsUserAdmin(true);
    }
  }, [location.pathname]);

  const logout = () => {
    window.localStorage.clear();

    setIsUserConnected(false);
    setIsUserAdmin(false);
    setUsername(undefined);

    Snackbar.show("Logout successufully", "success");
    history.push("/");
  };

  return (
    <header>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={styles.menu}>
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
          <div className={styles.welcomeMessage}>
            Welcome <span>{username}</span>
          </div>
        )}

        <div className={styles.cartContainer}>
          {isUserConnected && (
            <Link to="/cart/id">
              <Badge size="small" count={5} offset={[8, 8]} style={{ backgroundColor: "#ec7a5c" }}>
                <div className={styles.cart}>
                  <CartIcon />
                  <p>My Cart</p>
                </div>
              </Badge>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
