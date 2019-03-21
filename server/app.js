const express = require("express");
const app = express();
const router = require("./router/index");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("/Users/mac/前端/enjoy/src/static"));
app.use("/", router);
app.listen(8080, () => {
  console.log("listen on 8080");
});
