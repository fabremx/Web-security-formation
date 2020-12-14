const AuthService = require("./auth.service.js");

async function login(req, res) {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.status(400).send({ message: "Username or Password missing!" });
  }

  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const response = await AuthService.logUser(user);

    if (!response.ok) {
      return res.status(404).send(response);
    }

    req.session.userId = response.user.userId;
    return res.send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function register(req, res) {
  if (
    !req.body ||
    !req.body.username ||
    !req.body.password ||
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.address
  ) {
    return res
      .status(400)
      .send({ message: "One or multiple parameters missing!" });
  }

  const user = {
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
  };

  try {
    const response = await AuthService.registerUser(user);

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ message: "Unable to logout user!" });
    }

    res.clearCookie("sid");
    return res.status(200).send({ message: "User successfully logout!" });
  });
}

module.exports = {
  login,
  register,
  logout,
};
