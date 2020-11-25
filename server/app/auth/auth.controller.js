const AuthService = require("./auth.service.js");

async function login(req, res) {
  if (!req.body || !req.body.user || !req.body.password) {
    return res.status(400).send({ message: "User or Password missing!" });
  }
  
  const user = {
    user: req.body.user,
    password: req.body.password,
  };
  
  try {
    const response = await AuthService.logUser(user)

    return response.ok
      ? res.send(response)
      : res.status(404).send(response)
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function register(req, res) {
  if (!req.body || !req.body.user || !req.body.password) {
    return res.status(400).send({ message: "User or Password missing!" });
  }
  
  const user = {
    user: req.body.user,
    password: req.body.password,
  };
  
  try {
    const response = await AuthService.registerUser(user)

    return response.ok
      ? res.send(response)
      : res.status(404).send(response)
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  login,
  register
}
