const sql = require("./db.js");

const Authentification = function(authent) {
  this.user = authent.user;
  this.password = authent.password;
};

Authentification.checkLogin = (authent, result) => {
  sql.query(`SELECT * FROM authentification WHERE user = '${authent.user}' AND password = '${authent.password}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, {
		  "message": "Login success"
	  });
      return;
    }

    result({ kind: "Incorrect login" }, null);
  });
};

module.exports = Authentification;
