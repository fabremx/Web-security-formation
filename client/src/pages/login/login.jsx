import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Snackbar } from "../../components/snackbar";
import styles from "./login.module.scss";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const logUser = async (event) => {
    event.preventDefault();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status !== 200) {
        Snackbar.show("Invalid credentials !", "error");
        return;
      }

      const result = await response.json();
      Snackbar.show("Authentification success ! Welcome", "success");

      window.localStorage.setItem("username", result.user.username);
      window.localStorage.setItem("cartId", result.user.cartId);
      window.localStorage.setItem("isAdmin", result.user.isAdmin);
      history.push("/");
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
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
