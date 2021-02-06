const { Snackbar } = require("../components/snackbar");
const { default: authApi } = require("./auth.api");

export const handleError = async (status, message = "Request error !") => {
  switch (status) {
    case 401:
      Snackbar.show("Unauthorized !", "error");
      await authApi.logout();
      window.location.href = "/";
      break;
    case 403:
      Snackbar.show("Forbidden access !", "error");
      break;
    default:
      Snackbar.show(message, "error");
      break;
  }
};
