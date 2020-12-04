import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Snackbar } from "../../components/snackbar";
import styles from "./register.module.scss";

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const registerUser = async (event) => {
    event.preventDefault();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          user: username,
          password: password,
        }),
      });

      if (response.status !== 200) {
        Snackbar.show("Registration failed !", "error");
        return;
      }

      await response.json();
      Snackbar.show("Registration success ! Welcome", "success");

      history.push("/");
    } catch (error) {
      console.log(error);
      Snackbar.show("Something went wrong", "error");
    }
  };

  return (
    <div className={styles.register}>
      <h2>Register</h2>

      <div className={styles.form}>
        <form onSubmit={registerUser}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />

          <button>Register</button>

          <p className={styles.message}>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
