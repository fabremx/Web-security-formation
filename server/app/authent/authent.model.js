const { mysql } = require("../../db.js");

const Authentification = function(authent) {
  this.user = authent.user;
  this.password = authent.password;
};

Authentification.checkLogin = (authent, result) => {
  mysql.query(`SELECT * FROM authentification WHERE user = '${authent.user}' AND password = '${authent.password}'`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, {
        "message": "Login success"
      });
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Authentification;
