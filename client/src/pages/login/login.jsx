import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import authApi from "../../api/auth.api";
import { Snackbar } from "../../components/snackbar";
import { usersService } from "../../services/users.service";
import styles from "./login.module.scss";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const logUser = async (event) => {
    event.preventDefault();

    const response = await authApi.login(username, password);
    if (!response.ok) return;

    Snackbar.show("Authentification success ! Welcome", "success");

    window.localStorage.setItem("username", response.user.username);
    window.localStorage.setItem("cartId", response.user.cartId);
    window.localStorage.setItem("isAdmin", response.user.isAdmin);
    usersService.setUser();
    history.push("/");
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>

      <div className={styles.form}>
        <form onSubmit={logUser}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required />

          <button>login</button>

          <p className={styles.message}>
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
