import { Snackbar } from "../components/snackbar";
import { handleError } from "./handleErrors";

const postUserAvatar = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);

    const response = await fetch("http://localhost:3000/file/avatar", {
      method: "POST",
      credentials: "include",
      body: data,
    });

    if (response.status !== 200) {
      handleError(response, "Image upload failed !");
      return { ok: false };
    }

    const result = await response.json();
    return { ok: true, url: result.url };
  } catch (error) {
    Snackbar.show("Something went wrong", "error");
  }
};

const filesApi = {
  postUserAvatar,
};

export default filesApi;
