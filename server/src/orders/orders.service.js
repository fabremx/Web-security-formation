const { mongodb } = require("../db.js");
const dbConfig = require("../db.config.js");

async function postNewOrder(order) {
  try {
    const response = await mongodb
      .db(dbConfig.MONGODB_DB)
      .collection("orders")
      .insertOne(order);

    if (response) {
      return { ok: true };
    }

    return { ok: false, message: "Add order failed !" };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

async function getOrdersByUser(id) {
  try {
    const response = await mongodb
      .db(dbConfig.MONGODB_DB)
      .collection("orders")
      .find({ "user.id": id })
      .toArray();

    if (response) {
      return { ok: true, orders: response };
    }

    return { ok: false, message: "No order(s) found !" };
  } catch (error) {
    throw { type: "unknown", error };
  }
}

module.exports = {
  getOrdersByUser,
  postNewOrder,
};
