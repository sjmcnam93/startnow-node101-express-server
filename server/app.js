
var express = require("express");
var morgan = require("morgan");
var topSpots = require("./data.json");

var app = express();

app.use(morgan("dev"));

app.get('/', function(req, res) {
    res.send("");
});

app.get("/data", function(req,res) {
    res.send(topSpots);
});

module.exports = app;
