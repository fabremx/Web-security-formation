module.exports = app => {
  const Authent = require("./authent.controller.js");
  const cors = require('cors');
  
  // login
  app.post("/login", cors(), Authent.login);
};