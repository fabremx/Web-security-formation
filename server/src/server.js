const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(
  session({
    name: "sid",
    secret: "secret",
    saveUninitialized: true,
    resave: true,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 2,
    },
  })
);
app.use(function (_req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8081");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use(bodyParser.urlencoded({ extended: true }));

require("./auth/auth.routes.js")(app);
require("./products/products.routes.js")(app);
require("./users/users.routes.js")(app);
require("./orders/orders.routes.js")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
