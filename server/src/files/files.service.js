const { mysql } = require("../db.js");

async function postAvatarURL(userId, url) {
  try {
    const [rows] = await mysql.query(
      `UPDATE users_info SET avatarURL = '${url}' WHERE userId = '${userId}'`
    );

    if (rows && rows.changedRows === 1) {
      return {
        ok: true,
        message: "Avatar corretcly posted",
        url,
      };
    }

    return {
      ok: false,
      message: "Avatar post failed !",
    };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

module.exports = {
  postAvatarURL,
};
