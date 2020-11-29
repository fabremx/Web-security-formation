module.exports = app => {
  const AuthController = require("./auth.controller.js");
  const cors = require('cors');

  app.post("/login", cors(), AuthController.login);
  app.post("/register", cors(), AuthController.register);
};