const Authentification = require("./authent.model.js");

exports.login = (req, res) => {
 if (!req.body || !req.body.user || !req.body.password) {
    res.status(400).send({
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
        res.status(404).send({
          message: "Incorrect login"
        });
      } else {
        res.status(500).send({
          message: "An internal error occurs during login"
        });
      }
    } else res.send(data);
  });
};
