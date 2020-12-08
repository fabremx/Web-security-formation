const ProductsService = require("./products.service.js");

async function getProducts(req, res) {
  let response;

  try {
    if (!req.query.search) {
      response = await ProductsService.getProducts();
    } else {
      console.log("req.query.search", req.query.search);
      response = await ProductsService.getProductsBySearch(req.query.search);
    }

    return response.ok
      ? res.render("search", {
          products: response.products,
          search: req.query.search,
        })
      : res.status(404).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

async function getProduct(req, res) {
  if (!req.query || !req.query.id) {
    return res.status(400).send({
      message: "Id missing!",
    });
  }

  const id = parseInt(req.query.id, 10);

  try {
    const response = await ProductsService.getProductById(id);

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
};
