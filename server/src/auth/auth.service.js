const { mysql } = require("../db.js");

async function logUser(authent) {
  try {
    const [rows] = await mysql.query(
      `SELECT * FROM users LEFT JOIN users_info ON users.id = users_info.userId WHERE users.username = '${authent.username}' AND users.password = '${authent.password}'`
    );

    if (rows.length) {
      return {
        ok: true,
        message: "User correctly logged",
        user: {
          username: rows[0].username,
          isAdmin: rows[0].isAdmin,
          cartId: rows[0].cartId,
        },
      };
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
    const insertIntoUser = `INSERT INTO users VALUES (0, '${authent.username}', '${authent.password}', 0);`;
    const insertIntoUserInfo = `INSERT INTO users_info VALUES (0, '${
      authent.firstname
    }', '${authent.lastname}', '${
      authent.address
    }', (SELECT COUNT(*) FROM users) + 999, '${getRandom(
      15
    )}', '04/12/2024', '${getRandom(
      3
    )}', (SELECT id FROM users WHERE username = '${authent.username}'));`;

    await mysql.query(insertIntoUser);
    await mysql.query(insertIntoUserInfo);

    return { ok: true, message: "User correctly registered" };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

function getRandom(length) {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
  ).toString();
}

module.exports = {
  logUser,
  registerUser,
};
