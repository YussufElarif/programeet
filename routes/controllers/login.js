var jwt = require("jsonwebtoken");
var User = require("../models/user");
var React = require("react");

function loginGet(req, res){
  res.render("login");
}

function loginUser(req, res, next){
  User.find({username: req.body.username}, function(err, user){
    if (err) return err;
      jwt.sign({data: req.body.username}, 'programeetToken', {expiresIn: 60*60});
  });
}

module.exports = {
  index: loginGet,
  login: loginUser
}
