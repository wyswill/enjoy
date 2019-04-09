const express = require("express");
const app = express();
const router = require("./router/index");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/static'));
app.use("/", router);
app.listen(8088, () => {
  console.log("listen on 8088");
});
