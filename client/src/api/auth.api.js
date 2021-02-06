import { Snackbar } from "../components/snackbar";
import { usersService } from "../services/users.service";
import { handleError } from "./handleErrors";

const login = async (username, password) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.status !== 200) {
      handleError(response.status, "Invalid credentials !");
      return { ok: false };
    }

    const result = await response.json();
    return { ok: true, user: result.user };
  } catch (error) {
    Snackbar.show("Something went wrong", "error");
    return { ok: false };
  }
};

const logout = async () => {
  try {
    const response = await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.status !== 200) {
      handleError(response, "Unable to logout user!");
      return { ok: false };
    }

    window.localStorage.clear();
    usersService.clearUser();
    return { ok: true };
  } catch (error) {
    Snackbar.show("Something went wrong", "error");
    return { ok: false };
  }
};

const authApi = {
  login,
  logout,
};

export default authApi;
