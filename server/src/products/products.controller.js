const ProductsService = require("./products.service.js");

async function getAllProducts(req, res) {
  try {
    const response = await ProductsService.getAllProducts();

    if (!response.ok) {
      return res.status(404).send(response);
    }

    return res.render("search", {
      products: response.products,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getProductsBySearch(req, res) {
  if (!req.query.q) {
    return res.status(400).send({ message: "search missing!" });
  }

  try {
    const response = await ProductsService.getProductsBySearch(req.query.q);

    if (!response.ok) {
      return res.status(404).send(response);
    }

    return res.render("search", {
      products: response.products,
      search: req.query.q,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getProductsByIds(req, res) {
  try {
    const idsArray = req.params.ids.split(",");
    const ids = idsArray.map((id) => parseInt(id, 10));
    const response = await ProductsService.getProductsByIds(ids);

    if (!response.ok) {
      return res.status(404).send(response);
    }

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getProductById(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const response = await ProductsService.getProductById(id);

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  getAllProducts,
  getProductsBySearch,
  getProductsByIds,
  getProductById,
};
