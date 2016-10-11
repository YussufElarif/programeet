var express = require("express");
var app = express();
var mongoose = require("mongoose");
var routes = require("./routes/routes");

app.set("views", __dirname + "/views");
app.set('view engine' , 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect('mongodb://localhost/programeet');

app.use(routes);

app.listen("8080");
