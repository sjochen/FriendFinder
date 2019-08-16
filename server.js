var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

require("./app/routing/apiRoutes.js")
require("./app/routing/htmlRoutes.js")

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });