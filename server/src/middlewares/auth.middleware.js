const validAutenthication = (req, res, next) => {
  console.log("userId", req.session.userId);

  if (!req.session.userId) {
    return res.status(401).send({
      message: "Unauthorized !",
    });
  }

  next();
};

module.exports = {
  validAutenthication,
};
