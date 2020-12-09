module.exports = (app) => {
  const UsersController = require("./users.controller.js");
  const cors = require("cors");

  app.get("/user/:cartId", cors(), UsersController.getUserInfoByCartId);
};
