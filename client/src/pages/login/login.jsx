import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Snackbar } from "../../components/snackbar";
import "./login.scss";

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
          user: username,
          password: password,
        }),
      });

      if (response.status !== 200) {
        Snackbar.show("Invalid credentials !", "error");
        return;
      }

      const result = await response.json();
      Snackbar.show("Authentification success ! Welcome", "success");

      window.localStorage.setItem("user", result.user.user);
      window.localStorage.setItem("isAdmin", result.user.isAdmin);
      history.push("/");
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <div className="form">
        <form className="login-form" onSubmit={logUser}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            id="user-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            id="password-input"
          />

          <button id="login-btn">login</button>

          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
