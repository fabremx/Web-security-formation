const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

app.use(cors())

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/auth/auth.routes.js")(app);
require("./app/products/products.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
