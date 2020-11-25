const { mysql } = require("../../db.js");

async function logUser(authent) {
  try {
    const [rows] = await mysql.query(`SELECT * FROM users WHERE user = '${authent.user}' AND password = '${authent.password}'`);

    if (rows.length) {
      return { ok: true, message: "User correctly logged", user: rows[0] };
    }

    return { ok: false, message: "Login or password incorrect, user not found !" };
  } catch (error) {
    throw { type: 'unknown', error }
  }
}

async function registerUser(authent) {
  try {
    const [rows] = await mysql.query(`INSERT INTO users VALUES (0, ${authent.user}, ${authent.password}, 0)`);

    if (rows.length) {
      return {  ok: true, "message": "User correctly registered" };
    }

    return { ok: false, message: "Something went wrong !" };
  } catch (error) {
    throw { type: 'unknown', error }
  }
}

module.exports = {
  logUser,
  registerUser
}
