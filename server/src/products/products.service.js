const { mongodb } = require("../db.js");
const dbConfig = require("../db.config.js");

async function getProducts() {
  try {
    const response = await mongodb
      .db(dbConfig.MONGODB_DB)
      .collection("products")
      .find()
      .toArray();

    if (response) {
      return { ok: true, products: response };
    }

    return { ok: false, message: "Products not found !" };
  } catch (err) {
    throw { type: "unknown", error };
  }
}

async function getProductsBySearch(search) {
  try {
    const response = await mongodb
      .db(dbConfig.MONGODB_DB)
      .collection("products")
      .find({
        title: { $regex: new RegExp(search, "gi") },
      })
      .toArray();

    console.log("response", response);

    if (response) {
      return { ok: true, products: response };
    }

    return { ok: false, message: "Products not found !" };
  } catch (err) {
    throw { type: "unknown", error };
  }
}

async function getProductById(id) {
  try {
    const response = await mongodb
      .db(dbConfig.MONGODB_DB)
      .collection("products")
      .findOne({ _id: id });

    if (response) {
      return { ok: true, product: response };
    }

    return { ok: false, message: "Product not found !" };
  } catch (err) {
    throw { type: "unknown", error };
  }
}

module.exports = {
  getProducts,
  getProductsBySearch,
  getProductById,
};
