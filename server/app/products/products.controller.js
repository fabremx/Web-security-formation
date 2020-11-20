const Product = require("./products.model.js");

exports.findOne = (req, res) => {
  if (!req.query || !req.query.id) {
    return res.status(400).send({
      message: "Id missing!"
    });
  }

  const product = new Product({
    id: req.query.id,
  });

  Product.findById(product, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found product with id ${req.query.id}.`
        });
      } else {
        return res.status(500).send(err);
      }
    } else return res.send(data);
  });
};