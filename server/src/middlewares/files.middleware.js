const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    console.log("destination", path.join(__dirname + "/../assets"));
    cb(null, path.join(__dirname + "/../assets"));
  },
  filename: function (_req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

module.exports = multer({ storage: storage }).single("file");
