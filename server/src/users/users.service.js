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
        user: {
          firstname: rows[0].firstname,
          lastname: rows[0].lastname,
          address: rows[0].address,
          creditCardNumber: rows[0].creditCardNumber,
          creditCardCVV: rows[0].creditCardCVV,
          creditCardExpiration: rows[0].creditCardExpiration,
        },
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
};
