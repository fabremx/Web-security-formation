const { mongodb } = require("../../db.js");
const dbConfig = require("../../db.config.js");

const Product = function(product) {
  this.id = parseInt(product.id, 10);
};

Product.findById = async (product, result) => {
  try {
    const response = await mongodb.db(dbConfig.MONGODB_DB).collection("products").findOne({ _id: product.id });

    if (response) {
      result(null, response);
      return;
    }

    result({ kind: "not_found" }, null);
  } catch (err) {
    result(err, null);
    return;
  }
};

module.exports = Product;
