module.exports = (app) => {
  const ProductsController = require("./products.controller.js");
  const { validAutenthication } = require("../middlewares/auth.middleware.js");

  app.get("/products", ProductsController.getAllProducts);
  app.get("/products/search", ProductsController.getProductsBySearch);
  app.get("/products/:ids", ProductsController.getProductsByIds);
  app.get("/product/:id", ProductsController.getProductById);
  app.get("/product/:id/reviews", ProductsController.getProductReviewsById);
  app.post(
    "/product/:id/review",
    validAutenthication,
    ProductsController.postProductReview
  );
};
