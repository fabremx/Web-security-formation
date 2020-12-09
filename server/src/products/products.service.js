const { mongodb } = require("../db.js");
const dbConfig = require("../db.config.js");

async function getAllProducts() {
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

    if (response) {
      return { ok: true, products: response };
    }

    return { ok: false, message: "Products not found !" };
  } catch (err) {
    throw { type: "unknown", error };
  }
}

async function getProductsByIds(ids) {
  try {
    const response = await mongodb
      .db(dbConfig.MONGODB_DB)
      .collection("products")
      .find({ _id: { $in: ids } })
      .toArray();

    if (response) {
      return { ok: true, products: response };
    }

    return { ok: false, message: "Product(s) not found !" };
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
  getAllProducts,
  getProductsBySearch,
  getProductsByIds,
  getProductById,
};
