const { validAutenthication } = require("../middlewares/auth.middleware.js");

module.exports = (app) => {
  const OrdersController = require("./orders.controller.js");

  app.post("/order", validAutenthication, OrdersController.createOrder);
  app.get("/orders", validAutenthication, OrdersController.getOrdersByUser);
};
