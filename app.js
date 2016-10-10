var express = require("express");
var app = express();
var mongoose = require("mongoose");

//var routes = require('./config/routes');

app.use(express.static("public"));

//app.use(routes);

app.listen("8080", function(){
  console.log("listening on port 8080");
});
