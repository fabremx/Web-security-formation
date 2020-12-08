const { mysql } = require("../db.js");

async function logUser(authent) {
  try {
    const [rows] = await mysql.query(
      `SELECT * FROM users WHERE username = '${authent.username}' AND password = '${authent.password}'`
    );

    if (rows.length) {
      return { ok: true, message: "User correctly logged", user: rows[0] };
    }

    return {
      ok: false,
      message: "Login or password incorrect, user not found !",
    };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

async function registerUser(authent) {
  try {
    await mysql.query(
      `INSERT INTO users VALUES (0, '${authent.username}', '${authent.password}', 0)`
    );
    return { ok: true, message: "User correctly registered" };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

module.exports = {
  logUser,
  registerUser,
};
