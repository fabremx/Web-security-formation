const { Snackbar } = require("../components/snackbar");
const { default: authApi } = require("./auth.api");

const handleError = async (error, message = "Request error !") => {
  switch (error.status) {
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

module.exports = {
  handleError,
};
