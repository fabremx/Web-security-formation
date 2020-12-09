module.exports = (app) => {
  const ProductsController = require("./products.controller.js");
  const cors = require("cors");

  app.get("/products", cors(), ProductsController.getAllProducts);
  app.get("/products/search", cors(), ProductsController.getProductsBySearch);
  app.get("/products/:ids", cors(), ProductsController.getProductsByIds);
  app.get("/product/:id", cors(), ProductsController.getProductById);
};
