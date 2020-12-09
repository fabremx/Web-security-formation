const UsersService = require("./users.service.js");

async function getUserInfoByCartId(req, res) {
  if (!req.params || !req.params.cartId) {
    return res.status(400).send({
      message: "Cart id missing!",
    });
  }

  const id = parseInt(req.params.cartId, 10);

  try {
    const response = await UsersService.getUserInfoByCartId(id);

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

module.exports = {
  getUserInfoByCartId,
};
