var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
//multipart uploads in forms
//  var multer = require("multer");
//redis used for session management
//  var redis = require("redis-url").parse("some URL");
//to use redis
//  var connect = require("connect-redis");
//  ASYNC - a good library in npm
//  Promise - ec6

var routes = require("./routes/routes");
var session = require('express-session');
var scss = require("./scss/style");


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

mongoose.connect(process.env.PROGRAMEET_MONGO_URL);

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.PROGRAMEET_SECRET_SESSION
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);


app.listen("8080");
