module.exports = app => {
  const ProductsController = require("./products.controller.js");
  const cors = require('cors');
  
  app.get("/products", cors(), ProductsController.getProduct);
};