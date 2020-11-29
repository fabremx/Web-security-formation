const { mongodb } = require("../db.js");
const dbConfig = require("../db.config.js");

async function getProductById(product) {
  try {
    const response = await mongodb.db(dbConfig.MONGODB_DB).collection("products").findOne({ _id: product.id });

    if (response) {
      return { ok: true, product: response };
    }

    return { ok: false, message: "Product not found !" };
  } catch (err) {
    throw { type: 'unknown', error }
  }
}

module.exports = {
  getProductById
};
