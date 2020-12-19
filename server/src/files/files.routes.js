module.exports = (app) => {
  const FilesController = require("./files.controller.js");
  const { validAutenthication } = require("../middlewares/auth.middleware.js");
  const multer = require("../middlewares/files.middleware.js");

  app.post(
    "/file/avatar",
    validAutenthication,
    multer,
    FilesController.postAvatar
  );
};
