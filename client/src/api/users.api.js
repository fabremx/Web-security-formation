import { Snackbar } from "../components/snackbar";
import { handleError } from "./handleErrors";

const getUserInfo = async () => {
  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "GET",
      credentials: "include",
    });

    if (response.status !== 200) {
      handleError(response);
      return { ok: false };
    }

    const result = await response.json();
    return { ok: true, user: result.user };
  } catch (error) {
    Snackbar.show("Something went wrong", "error");
  }
};

const usersApi = {
  getUserInfo,
};

export default usersApi;
