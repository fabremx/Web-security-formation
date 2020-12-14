const OrdersService = require("./orders.service.js");

async function createOrder(req, res) {
  if (
    !req.body ||
    !req.body.products ||
    !req.body.user ||
    !req.body.date ||
    !req.body.total
  ) {
    return res.status(400).send({
      message: "Infos missing!",
    });
  }

  try {
    const response = await OrdersService.postNewOrder(req.body);

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getOrdersByUser(req, res) {
  try {
    const response = await OrdersService.getOrdersByUser(req.session.userId);

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  createOrder,
  getOrdersByUser,
};
