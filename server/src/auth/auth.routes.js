module.exports = (app) => {
  const AuthController = require("./auth.controller.js");

  app.post("/login", AuthController.login);
  app.post("/register", AuthController.register);
  app.post("/logout", AuthController.logout);
};
