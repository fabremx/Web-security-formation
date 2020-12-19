import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import logo from "../../assets/images/logo.png";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import styles from "./header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { Snackbar } from "../snackbar";
import { useLocation } from "react-router";
import { Badge } from "antd";
import { UserAvatar } from "../userAvatar";
import authApi from "../../api/auth.api";
import { usersService } from "../../services/users.service";

export function Header() {
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [user, setUser] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [cookies] = useCookies(["cart"]);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    usersService.getUser().subscribe((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!window.localStorage.getItem("username")) {
      setUser(undefined);
      setIsUserAdmin(false);
      setUsername(undefined);
      return;
    }

    setUsername(window.localStorage.getItem("username"));

    if (window.localStorage.getItem("isAdmin") === "1") {
      setIsUserAdmin(true);
    }
  }, [location.pathname, user]);

  useEffect(() => {
    if (!cookies || !cookies.cart) {
      setCartItemsNumber(0);
      return;
    }

    const items = cookies.cart.split(",");
    setCartItemsNumber(items.length);
  }, [cookies]);

  const isActive = (pathname) => {
    return window.location.pathname === pathname;
  };

  const logout = async () => {
    try {
      const response = await authApi.logout();
      if (!response.ok) return;

      setUser(undefined);
      setIsUserAdmin(false);
      setUsername(undefined);

      Snackbar.show("Logout successufully", "success");
      history.push("/");
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
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
          <Link to="/" className={`${isActive("/") ? styles.active : ""}`}>
            Home
          </Link>
          <Link to="/products" className={`${isActive("/products") ? styles.active : ""}`}>
            Products
          </Link>
          <Link to="/about" className={`${isActive("/about") ? styles.active : ""}`}>
            About us
          </Link>
          <Link to="/contact" className={`${isActive("/contact") ? styles.active : ""}`}>
            Contact us
          </Link>
          {!user && (
            <Link to="/login" className={`${isActive("/login") ? styles.active : ""}`}>
              Login
            </Link>
          )}
          {!user && (
            <Link to="/register" className={`${isActive("/register") ? styles.active : ""}`}>
              Register
            </Link>
          )}
          {isUserAdmin && (
            <Link to="/admin" className={`${isActive("/admin") ? styles.active : ""}`}>
              Administration
            </Link>
          )}
          {user && <span onClick={logout}>Logout</span>}
        </div>

        <div className={styles.cartContainer}>
          {user && (
            <Link to={`/cart/${window.localStorage.getItem("cartId")}`}>
              <Badge size="small" count={cartItemsNumber} offset={[8, 8]} style={{ backgroundColor: "#ec7a5c" }}>
                <div className={styles.cart}>
                  <CartIcon />
                  <p>My Cart</p>
                </div>
              </Badge>
            </Link>
          )}
        </div>

        {user && (
          <Link to="/profile">
            <div className={styles.profile}>
              <UserAvatar style={styles.avatar} avatarURL={user.avatarURL} />
              <div className={styles.username}>{username}</div>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}
