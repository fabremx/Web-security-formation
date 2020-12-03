const ProductsService = require("./products.service.js");

async function getProduct(req, res) {
  if (!req.query || !req.query.id) {
    return res.status(400).send({
      message: "Id missing!"
    });
  }
  
  const product = {
    id: parseInt(req.query.id, 10)
  };

  try {
    const response = await ProductsService.getProductById(product)

    return response.ok
      ? res.send(response)
      : res.status(404).send(response)
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  getProduct
}
