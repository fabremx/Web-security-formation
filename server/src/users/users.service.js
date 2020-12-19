const { mysql } = require("../db.js");

async function getUserInfoByCartId(id) {
  try {
    const [rows] = await mysql.query(
      `SELECT * FROM users_info WHERE cartId = '${id}'`
    );

    if (rows.length) {
      return {
        ok: true,
        message: "User corretcly fetched",
        user: rows[0],
      };
    }

    return {
      ok: false,
      message: "User not found !",
    };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

async function getUserInfoById(id) {
  try {
    const [rows] = await mysql.query(
      `SELECT * FROM users_info WHERE userId = '${id}'`
    );

    if (rows.length) {
      return {
        ok: true,
        message: "User corretcly fetched",
        user: rows[0],
      };
    }

    return {
      ok: false,
      message: "User not found !",
    };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

module.exports = {
  getUserInfoByCartId,
  getUserInfoById,
};
