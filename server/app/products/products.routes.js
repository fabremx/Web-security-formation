module.exports = app => {
  const Product = require("./products.controller.js");
  const cors = require('cors');
  
  app.get("/products", cors(), Product.findOne);
};