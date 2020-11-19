const Authentification = require("./authent.model.js");

exports.login = (req, res) => {
  if (!req.body || !req.body.user || !req.body.password) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  const authentification = new Authentification({
    user: req.body.user,
    password: req.body.password,
    active: req.body.active
  });
  
  Authentification.checkLogin(authentification, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: "Incorrect login"
        });
      } else {
        return res.status(500).send({
          message: "An internal error occurs during login"
        });
      }
    } else return res.send(data);
  });
};
