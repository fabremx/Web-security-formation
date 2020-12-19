const FilesService = require("./files.service.js");
const path = require("path");

async function postAvatar(req, res) {
  try {
    const avatarURL = `${req.protocol}://${req.get("host")}/assets/${
      req.file.filename
    }`;

    const response = await FilesService.postAvatarURL(
      req.session.userId,
      avatarURL
    );

    return response.ok ? res.send(response) : res.status(404).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  postAvatar,
};
