var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

require("./app/routing/apiRoutes")
require("./app/routing/htmlRoutes")

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
app.get("/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/friends.js"));
});

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });