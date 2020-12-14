module.exports = (app) => {
  const UsersController = require("./users.controller.js");
  const { validAutenthication } = require("../middlewares/auth.middleware.js");

  app.get(
    "/user/:cartId",
    validAutenthication,
    UsersController.getUserInfoByCartId
  );
  app.get("/user/", validAutenthication, UsersController.getUserInfo);
};
